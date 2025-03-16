import type { Cocktail, CocktailServerResponse } from "~/types/cocktails";

export const transformCocktailData = (cocktail: CocktailServerResponse): Cocktail => {
  return Object.entries(cocktail).reduce((result, [key, value]) => {
    const ingridientsPrefix = 'strIngredient';
    const measurePrefix = 'strMeasure';

    if (!key.startsWith(ingridientsPrefix) && !key.startsWith(measurePrefix) ) {
      result[key as keyof Cocktail] = value;
    }

    if (!result.ingredients) {
      result.ingredients = {};
    }

    if (key.startsWith(ingridientsPrefix)) {
      const index = parseInt(key.replace(/\D/g, ""), 10);
      const measure = cocktail[`${measurePrefix}${index}` as keyof CocktailServerResponse];

      if (measure) {
        result.ingredients[value] = measure;
      }
    }

    return result;
  }, {} as Cocktail);
};
