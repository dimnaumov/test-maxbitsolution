import { apiServiceCocktails } from "~/services/apiServiceCocktails";
import type { Cocktail } from "~/types/cocktails";

export interface CocktailsState {
  items: Record<string, Record<string, Cocktail>>;
  isLoading: boolean;
  error: string | null;
}

export const useCocktailsStore = defineStore('cocktails', {
  state: (): CocktailsState => ({
    items: {},
    isLoading: false,
    error: null,
  }),

  actions: {
    async getCocktailByName(name: string) {
      if (this.items[name]) {
        return;
      }

      this.isLoading = true;
      this.error = null;

      try {
        const response = await apiServiceCocktails.getCocktailByName(name);

        if (!response.drinks) {
          this.error = 'Data not found';
          return;
        }

        this.items[name] = response.drinks.reduce((result: Record<string, Cocktail>, cocktail) => {
          result[cocktail.idDrink] = transformCocktailData(cocktail);

          return result;
        }, {});
      } catch (err) {
        this.error = err as string;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
