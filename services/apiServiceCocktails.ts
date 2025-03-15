import type { apiGetCocktailByNameResponse } from "~/types/apiServiceCocktails";

class ApiServiceCocktails {
  private static instance: ApiServiceCocktails;
  private baseURL: string;

  private constructor() {
    this.baseURL = process.env.COCKTAILDB_API_URL || 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  }

  public static getInstance(): ApiServiceCocktails {
    if (!ApiServiceCocktails.instance) {
      ApiServiceCocktails.instance = new ApiServiceCocktails();
    }

    return ApiServiceCocktails.instance;
  }

  public async getCocktailByName(name: string): Promise<apiGetCocktailByNameResponse> {
    try {
      const headers = {};
      const { data, error } = await useFetch<apiGetCocktailByNameResponse>(`${this.baseURL}?s=${name}`, { headers });

      if (error.value) {
        throw new Error(error.value.message);
      }

      if (!data.value) {
        throw new Error('Коктейли с таким названием не найдены!');
      }

      return data.value;
    } catch (error) {
      throw error;
    }
  }
}

export const apiServiceCocktails = ApiServiceCocktails.getInstance();
