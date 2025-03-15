import type { Cocktail } from "~/types/cocktails";

export const getIngridientsAndMeasuresFormCocktail = (cocktail: Cocktail) => {
  const ingridientsPrefix = 'strIngredient';
  const measurePrefix = 'strMeasure';

  return Object.entries(cocktail).reduce((result, [key, value]) => {
    if (key.startsWith(ingridientsPrefix)) {
      const index = parseInt(key.replace(/\D/g, ""), 10);
      if (cocktail[`${measurePrefix}${index}`]) {
        result[value] = cocktail[`${measurePrefix}${index}`]
      }
    }

    return result;
  }, {});
}
