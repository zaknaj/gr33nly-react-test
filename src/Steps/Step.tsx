import { useState } from "react";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { StepType } from "./StepType";

export const Step = ({ etape }: { etape: StepType }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={`step ${checked ? "checked" : ""}`}
      onClick={() => setChecked((prev) => !prev)}
    >
      <div>
        {etape.order}. {etape.description}
      </div>
      <div>
        {etape.ingredients && (
          <IngredientsWithQuantity
            ingredientsWithQuantity={etape.ingredients}
          />
        )}
      </div>
    </div>
  );
};

export default Step;
