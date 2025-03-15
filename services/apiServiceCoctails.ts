import type { apiGetCoctailByNameResponse } from "~/types/apiServiceCoctails";

class ApiServiceCoctails {
  private static instance: ApiServiceCoctails;
  private baseURL: string;

  private constructor() {
    this.baseURL = process.env.COCKTAILDB_API_URL || 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  }

  public static getInstance(): ApiServiceCoctails {
    if (!ApiServiceCoctails.instance) {
      ApiServiceCoctails.instance = new ApiServiceCoctails();
    }

    return ApiServiceCoctails.instance;
  }

  public async getCoctailByName(name: string): Promise<apiGetCoctailByNameResponse> {
    try {
      const headers = {};
      const { data, error } = await useFetch<apiGetCoctailByNameResponse>(`${this.baseURL}?s=${name}`, { headers });

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

export const apiServiceCoctails = ApiServiceCoctails.getInstance();
