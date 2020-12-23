import axios from "axios";
import { SearchResonpose } from "../types";
import { BASE_URL } from "constants/index";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: "0cf3de2390c39675374e03193a733cfc",
  },
});

export const searchMovies = async (query: string): Promise<SearchResonpose> => {
  const result = await api.get<SearchResonpose>("/search/movie", {
    params: {
      query: query || "no country for old men",
    },
  });

  return result.data;
};
