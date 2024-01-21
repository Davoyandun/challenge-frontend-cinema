import { OPTIONS, API_MOVIE_ID_URL } from "./constants.js";

export const get_movie = async (id) => {
  try {
    const response = await fetch(`${API_MOVIE_ID_URL}${id}?info=base_info`, OPTIONS);
    const result = await response.text();
    return JSON.parse(result).results;
  } catch (error) {
    throw error;
  }
};

export default get_movie;
