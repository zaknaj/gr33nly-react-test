import { getFilterIdentifier, useStore } from "../store";
import { FilterLogicType, FilterType, FilterTypesType } from "./FilterType";

const getFilterLabel = (f: FilterType) => {
  return f.type === FilterTypesType.Ingredient ? f.value.name : f.value.name.fr;
};

export const Filter = ({ filter }: { filter: FilterType }) => {
  const toggleFilterLogic = useStore((store) => store.toggleFilterLogic);
  const toggleFilter = useStore((store) => store.toggleFilter);

  return (
    <div
      className="filter"
      key={getFilterIdentifier(filter)}
      onClick={() => toggleFilter(filter)}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFilterLogic(filter);
        }}
      >
        {filter.logic === FilterLogicType.Include ? "✅" : "❌"}
      </button>
      <div>{getFilterLabel(filter)}</div>
    </div>
  );
};
