import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { Filters } from "./Filters/Filters";
import { TagsList } from "./Tags/TagsList";

export default function App() {
  return (
    <div className="App">
      <TagsList />
      <Filters />
      <Recipes />
    </div>
  );
}
