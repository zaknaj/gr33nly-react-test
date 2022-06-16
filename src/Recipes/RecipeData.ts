import { RecipeType } from "./RecipeType";
import { ListOfRecipes } from "./RecipeType";

import {
  sugar,
  flour,
  redFruits,
  chocolate,
  egg,
  butter,
  almondPowder,
  pear,
  cream,
  salad,
  cucumber,
  feta,
  orangeJuice,
  milk,
} from "../Ingredients/IngredientData";

import {
  stepsFondantChocolat,
  stepsPavlova,
  stepsTarteAuxPoires,
} from "../Steps/StepData";

import {
  appetizer,
  autumn,
  dessert,
  glutenFree,
  summer,
  vegan,
  winter,
} from "../Tags/TagData";

const pavlova: RecipeType = {
  nom: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  etapes: stepsPavlova,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: redFruits, quantity: 100, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [summer, dessert],
};

const fondantChocolat: RecipeType = {
  nom: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2010/5/20/0/CCFFA108_Moelleux-au-Chocolat_s4x3.jpg.rend.hgtvcom.616.462.suffix/1357271752869.jpeg",
  ingredients: [chocolate, egg, flour, butter, sugar],
  etapes: stepsFondantChocolat,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 200, unit: "g" },
    { ingredient: flour, quantity: 50, unit: "g" },
    { ingredient: chocolate, quantity: 200, unit: "g" },
    { ingredient: butter, quantity: 150, unit: "g" },
  ],
  tags: [dessert, winter],
};

const pearPie: RecipeType = {
  nom: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  etapes: stepsTarteAuxPoires,
  ingredientsWithQuantity: [
    { ingredient: pear, quantity: 2 },
    { ingredient: almondPowder, quantity: 50, unit: "g" },
    { ingredient: sugar, quantity: 150, unit: "g" },
    { ingredient: egg, quantity: 2 },
  ],
  tags: [dessert, autumn],
};

const waldorfSalad: RecipeType = {
  nom: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  ingredients: [salad, cucumber, feta],
  ingredientsWithQuantity: [
    { ingredient: salad, quantity: 1 },
    {
      ingredient: cucumber,
      quantity: 1,
    },
    { ingredient: feta, quantity: 150, unit: "g" },
  ],
  tags: [appetizer, summer, vegan, glutenFree],
};

const crepeSuzette: RecipeType = {
  nom: "Crêpe suzette",
  description: "Une crépe classique aux zestes d'orange et rhum",
  imageURL:
    "https://www.countryandtownhouse.com/wp-content/uploads/2022/02/Le-Pont-de-la-Tour-pancake-recipe.jpg",
  ingredients: [butter, flour, egg, orangeJuice, milk],
  ingredientsWithQuantity: [
    { ingredient: butter, quantity: 2, unit: "tbsp" },
    {
      ingredient: flour,
      quantity: 500,
      unit: "g",
    },
    { ingredient: orangeJuice, quantity: 50, unit: "ml" },
    { ingredient: milk, quantity: 200, unit: "ml" },
  ],
  tags: [dessert],
};

export const allRecipes: ListOfRecipes = [
  pavlova,
  fondantChocolat,
  pearPie,
  waldorfSalad,
  crepeSuzette,
];
