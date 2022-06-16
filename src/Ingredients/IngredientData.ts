import { IngredientType } from "./IngredientType";

export const chocolate: IngredientType = {
  name: "chocolat",
  unit: "kg",
  prefix: "de",
};

export const sugar: IngredientType = {
  name: "sucre",
  unit: "kg",
  prefix: "de",
};

export const butter: IngredientType = {
  name: "beurre",
  type: "produit laitier",
  unit: "kg",
  prefix: "de",
};

export const flour: IngredientType = {
  name: "farine",
  unit: "kg",
  prefix: "de",
};

export const pear: IngredientType = {
  name: "poire",
  names: "poires",
  type: "fruit",
};

export const egg: IngredientType = {
  name: "oeuf",
  names: "oeufs",
};

export const redFruits: IngredientType = {
  name: "fruits rouges",
  type: "fruit",
  unit: "kg",
  prefix: "de",
};

export const almondPowder: IngredientType = {
  name: "poudre d'amande",
  unit: "kg",
  prefix: "de",
};

export const cream: IngredientType = {
  name: "crème liquide",
  unit: "cl",
  prefix: "de",
};

export const salad: IngredientType = {
  name: "salade",
};

export const feta: IngredientType = {
  name: "feta",
  type: "fromage",
  unit: "g",
  prefix: "de",
};

export const cucumber: IngredientType = {
  name: "concombre",
  type: "vegetables",
  unit: "unit",
};

export const orangeJuice: IngredientType = {
  name: "jus d'orange",
  prefix: "de",
  type: "fruit",
  unit: "cl",
};

export const milk: IngredientType = {
  name: "lait",
  prefix: "de",
  unit: "cl",
};

export const ingredientsList = [
  chocolate,
  sugar,
  butter,
  flour,
  pear,
  egg,
  redFruits,
  almondPowder,
  cream,
  salad,
  feta,
  cucumber,
  orangeJuice,
  milk,
];
