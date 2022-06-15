import Recipe from "./Recipe";
import { useRecipes } from "../store";

export const Recipes = ({}) => {
  const recipes = useRecipes();
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          borderWidth: "10px",
          borderColor: "black",
          maxWidth: "800px",
        }}
      >
        {recipes.map((obj) => (
          <Recipe recipe={obj} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
