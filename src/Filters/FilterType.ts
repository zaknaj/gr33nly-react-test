import { IngredientType } from "../Ingredients/IngredientType";
import { TagType } from "../Tags/TagType";

export enum FilterTypesType {
  Ingredient = "ingredient",
  Tag = "tag",
}

export enum FilterLogicType {
  Include,
  Exclude,
}

export type FilterType =
  | {
      type: FilterTypesType.Tag;
      value: TagType;
      logic: FilterLogicType;
    }
  | {
      type: FilterTypesType.Ingredient;
      value: IngredientType;
      logic: FilterLogicType;
    };
