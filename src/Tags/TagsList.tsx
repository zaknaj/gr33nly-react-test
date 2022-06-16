import { useMemo } from "react";
import { FilterTypesType } from "../Filters/FilterType";
import { useStore } from "../store";
import { tagList } from "./TagData";
import { Tags } from "./Tags";

export const TagsList = () => {
  const filters = useStore((store) => store.filters);

  const availableTags = useMemo(() => {
    return tagList.filter((tag) => {
      return !filters.find((filter) => {
        return (
          filter.type === FilterTypesType.Tag && filter.value.id === tag.id
        );
      });
    });
  }, [filters]);

  return (
    <div className="tags-list">
      <Tags tags={availableTags} />
    </div>
  );
};
