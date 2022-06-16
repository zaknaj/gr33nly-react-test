import Ingredient from "./Ingredient";
import { IngredientWithQuantityType } from "./IngredientWithQuantityType";

export const IngredientWithQuantity = ({
  ingredientWithQuantity,
}: {
  ingredientWithQuantity: IngredientWithQuantityType;
}) => {
  return (
    <div className="ingredient">
      {ingredientWithQuantity.quantity}
      {ingredientWithQuantity.unit}
      &nbsp;
      {ingredientWithQuantity.ingredient.prefix}
      &nbsp;
      <Ingredient
        ingredient={ingredientWithQuantity.ingredient}
        quantity={ingredientWithQuantity.quantity}
      />
    </div>
  );
};
