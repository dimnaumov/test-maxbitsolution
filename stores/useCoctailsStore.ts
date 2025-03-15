import { apiServiceCoctails } from "~/services/apiServiceCoctails";
import type { Coctail } from "~/types/coctails";

export interface CoctailsState {
  items: Record<Coctail['idDrink'], Coctail>;
  ids: Coctail['idDrink'][];
  isLoading: boolean;
  error: string | null;
}

export const useCoctailsStore = defineStore('coctails', {
  state: (): CoctailsState => ({
    items: {},
    ids: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    async getCoctailByName(name: string) {
      this.isLoading = true;
      this.error = null;

      try {
        const response = await apiServiceCoctails.getCoctailByName(name);

        this.items = response.drinks.reduce((result: Record<Coctail['idDrink'], Coctail>, drink) => {
          result[drink.idDrink] = drink;

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
