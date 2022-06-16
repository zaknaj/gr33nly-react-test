import { RecipeType } from "./RecipeType";
import Steps from "../Steps/Steps";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { useState } from "react";
import { Tags } from "../Tags/Tags";

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const [showIngredients, setShowIngredients] = useState<boolean>(false);
  const [showSteps, setShowSteps] = useState<Boolean>(false);

  return (
    <div className="recipe">
      <div>
        <img src={recipe.imageURL} />
        <div className="recipe-info">
          <div className="recipe-title">{recipe.nom}</div>
          <div className="recipe-description">{recipe.description}</div>
        </div>
      </div>
      <div>
        <div className="recipe-content">
          <Tags tags={recipe.tags} />
          <div className="section">
            <div
              className="section-label"
              onClick={() => setShowIngredients((prev) => !prev)}
            >
              Ingrédients
            </div>
            {showIngredients && (
              <div className="section-content">
                <IngredientsWithQuantity
                  ingredientsWithQuantity={recipe.ingredientsWithQuantity}
                />
              </div>
            )}
          </div>
          {recipe.etapes && (
            <div className="section">
              <div
                className="section-label"
                onClick={() => setShowSteps((prev) => !prev)}
              >
                Etapes de la recette
              </div>

              {showSteps && (
                <div className="section-content">
                  <Steps steps={recipe.etapes} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
