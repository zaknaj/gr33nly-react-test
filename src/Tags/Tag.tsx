import { FilterLogicType, FilterTypesType } from "../Filters/FilterType";
import { useStore } from "../store";
import { TagType } from "./TagType";

export const Tag = ({ tag }: { tag: TagType }) => {
  const toggleFilter = useStore((store) => store.toggleFilter);
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: `${tag.color}`,
        cursor: "pointer",
      }}
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
