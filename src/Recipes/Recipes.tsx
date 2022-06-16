import Recipe from "./Recipe";
import { useRecipes } from "../store";

export const Recipes = ({}) => {
  const recipes = useRecipes();
  return (
    <div className="recipes">
      {recipes.map((recipe, recipeIndex) => (
        <Recipe key={`recipe_${recipeIndex}`} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
