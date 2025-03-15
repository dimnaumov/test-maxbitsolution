import { apiServiceCocktails } from "~/services/apiServiceCocktails";
import type { Cocktail } from "~/types/cocktails";

export interface CocktailsState {
  items: Record<string, Record<string, Cocktail>>;
  ids: Cocktail['idDrink'][];
  isLoading: boolean;
  error: string | null;
}

export const useCocktailsStore = defineStore('cocktails', {
  state: (): CocktailsState => ({
    items: {},
    ids: [],
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

        this.items[name] = response.drinks.reduce((result: Record<string, Cocktail>, cocktail) => {
          result[cocktail.idDrink] = transformCocktailData(cocktail);

          return result;
        }, {});

        this.ids = response.drinks.map((drink) => drink.idDrink);
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
