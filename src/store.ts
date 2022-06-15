import { useMemo } from "react";
import create from "zustand";
import {
  FilterType,
  FilterTypesType,
  FilterLogicType,
} from "./Filters/FilterType";
import { allRecipes } from "./Recipes/RecipeData";

type StateType = {
  filters: FilterType[];
  toggleFilter: (filter: FilterType) => void;
  clearFilters: () => void;
};

export const getFilterIdentifier = (filter: FilterType) => {
  if (filter.type === FilterTypesType.Ingredient) return filter.value.name;
  return filter.value.id;
};

export const useStore = create<StateType>((set) => ({
  filters: [],
  toggleFilter: (filter: FilterType) =>
    set((state) => {
      if (
        state.filters.some(
          (f) => getFilterIdentifier(filter) === getFilterIdentifier(f)
        )
      ) {
        return {
          filters: state.filters.filter((f) => {
            return getFilterIdentifier(f) !== getFilterIdentifier(filter);
          }),
        };
      }
      return { filters: [...state.filters, filter] };
    }),
  clearFilters: () => set({ filters: [] }),
}));

const getFilteredRecipes = (filters: FilterType[]) => {
  let filteredRecipes = [...allRecipes];
  filters.forEach((filter) => {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      let includesIngredientOrTag = false;
      if (filter.type === FilterTypesType.Ingredient) {
        // Filtering by ingredient
        includesIngredientOrTag = !!recipe.ingredients?.includes(filter.value);
      } else if (filter.type === FilterTypesType.Tag) {
        // Filtering by tag
        includesIngredientOrTag = recipe.tags.includes(filter.value);
      }
      // If the filter logic is exclude, and the filter is absent => include the recipe
      // If the filter logic is include, and the filter is present => include the recipe
      // otherwise, filter out the recipe
      return (
        (filter.logic === FilterLogicType.Include && includesIngredientOrTag) ||
        (filter.logic === FilterLogicType.Exclude && !includesIngredientOrTag)
      );
    });
  });
  return filteredRecipes;
};

export const useRecipes = () => {
  const filters = useStore((store) => store.filters);
  const recipes = useMemo(() => {
    return getFilteredRecipes(filters);
  }, [filters]);
  return recipes;
};
