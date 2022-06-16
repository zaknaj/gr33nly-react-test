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
  const toggleFilter = useStore((store) => store.toggleFilter);
  const toggleFilterLogic = useStore((store) => store.toggleFilterLogic);

  const handleSelectedFilter = (filterString: string) => {
    let [type, val] = filterString.split("__");

    if (type === FilterTypesType.Tag) {
      const value = tagList.find((tag) => tag.id === val);
      value &&
        toggleFilter({
          type: FilterTypesType.Tag,
          logic: FilterLogicType.Include,
          value,
        });
    } else {
      const value = ingredientsList.find(
        (ingredient) => ingredient.name === val
      );
      value &&
        toggleFilter({
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
        <div className="filter" key={getFilterIdentifier(f)}>
          <button onClick={() => toggleFilterLogic(f)}>
            {f.logic === FilterLogicType.Include ? "✅" : "❌"}
          </button>
          <div onClick={() => toggleFilter(f)}>{getFilterLabel(f)}</div>
        </div>
      ))}
      <select
        name="cars"
        id="cars"
        onChange={(e) => {
          if (e.target.value) {
            handleSelectedFilter(e.target.value);
            e.target.value = "";
          }
        }}
        defaultValue=""
      >
        <option defaultChecked disabled value="">
          Filtrer par ...
        </option>
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
