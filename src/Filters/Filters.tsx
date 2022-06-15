import { useMemo } from "react";
import { ingredientsList } from "../Ingredients/IngredientData";
import { getFilterIdentifier, useStore } from "../store";
import { tagList } from "../Tags/TagData";
import { FilterLogicType, FilterType, FilterTypesType } from "./FilterType";

const getFilterLabel = (f: FilterType) => {
  return f.type === FilterTypesType.Ingredient ? f.value.name : f.value.name.fr;
};

export const Filters = () => {
  const filters = useStore((store) => store.filters);
  const toggleFitler = useStore((store) => store.toggleFilter);

  const handleSelectedFilter = (filterString: string) => {
    let [type, val] = filterString.split("__");

    console.log(type, val);
    if (type === FilterTypesType.Tag) {
      const value = tagList.find((tag) => tag.id === val);
      value &&
        toggleFitler({
          type: FilterTypesType.Tag,
          logic: FilterLogicType.Include,
          value,
        });
    } else {
      const value = ingredientsList.find(
        (ingredient) => ingredient.name === val
      );
      value &&
        toggleFitler({
          type: FilterTypesType.Ingredient,
          logic: FilterLogicType.Include,
          value,
        });
    }
  };

  // only show ingredients that are not already in the filter
  const remainingIngredients = useMemo(() => {
    return ingredientsList.filter((ingredient) => {
      return !filters.find((filter) => {
        return (
          filter.type === FilterTypesType.Ingredient &&
          filter.value.name === ingredient.name
        );
      });
    });
  }, [filters]);

  // only show tags that are not already in the filter
  const remainingTags = useMemo(() => {
    return tagList.filter((ingredient) => {
      return !filters.find((filter) => {
        return (
          filter.type === FilterTypesType.Tag &&
          filter.value.id === ingredient.id
        );
      });
    });
  }, [filters]);

  return (
    <div>
      <h2>filtres</h2>
      {filters.map((f) => (
        <div key={getFilterIdentifier(f)} onClick={() => toggleFitler(f)}>
          {getFilterLabel(f)}
        </div>
      ))}
      <select
        name="cars"
        id="cars"
        onChange={(e) => {
          handleSelectedFilter(e.target.value);
        }}
      >
        <optgroup label="Filtrer par tag">
          {remainingTags.map((tag) => (
            <option key={tag.id} value={`${FilterTypesType.Tag}__${tag.id}`}>
              {tag.name.fr}
            </option>
          ))}
        </optgroup>
        <optgroup label="Filtrer par ingredients">
          {remainingIngredients.map((ingredient) => (
            <option
              key={ingredient.name}
              value={`${FilterTypesType.Ingredient}__${ingredient.name}`}
            >
              {ingredient.name}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};
