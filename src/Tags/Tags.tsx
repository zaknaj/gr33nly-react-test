import { Tag } from "./Tag";
import { TagType } from "./TagType";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
  );
};
