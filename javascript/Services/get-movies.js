import { OPTIONS, API_URL } from "../utils/constants.js";

export const get_movies = async () => {
  try {
    const response = await fetch(API_URL, OPTIONS);
    const result = await response.text();
    return JSON.parse(result).results;
  } catch (error) {
    throw error;
  }
};
export default get_movies;
