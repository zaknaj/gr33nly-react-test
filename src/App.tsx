import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { Filters } from "./Filters/Filters";

export default function App() {
  return (
    <div className="App">
      Liste des recettes
      <Filters />
      <Recipes />
    </div>
  );
}
