import Ingredient from "./Ingredient";
import { IngredientWithQuantityType } from "./IngredientWithQuantityType";
import { IngredientWithQuantity } from "./IngredientWithQuantity";

export const IngredientsWithQuantity = ({
  ingredientsWithQuantity,
}: {
  ingredientsWithQuantity: IngredientWithQuantityType[];
}) => {
  return (
    <>
      {ingredientsWithQuantity.map(
        (ingredientWithQuantity, ingredientIndex) => (
          <IngredientWithQuantity
            key={`ingredient_${ingredientIndex}`}
            ingredientWithQuantity={ingredientWithQuantity}
          />
        )
      )}
    </>
  );
};

export default IngredientsWithQuantity;
