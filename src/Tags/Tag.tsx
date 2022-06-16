import { FilterLogicType, FilterTypesType } from "../Filters/FilterType";
import { useStore } from "../store";
import { TagType } from "./TagType";

export const Tag = ({ tag }: { tag: TagType }) => {
  const toggleFilter = useStore((store) => store.toggleFilter);
  return (
    <div
      onClick={() =>
        toggleFilter({
          type: FilterTypesType.Tag,
          value: tag,
          logic: FilterLogicType.Include,
        })
      }
    >
      {tag.name.fr}
    </div>
  );
};
