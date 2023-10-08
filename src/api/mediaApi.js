import axios from "axios";

const movie_url = import.meta.env.VITE_MOVIE_BASE_URL;
const movie_api = import.meta.env.VITE_MOVIE_API;

export const getTrending = async () => {
  try {
    const movie = await axios.get(
      `${movie_url}/trending/all/day?&api_key=${movie_api}`
    );
    return movie;
  } catch (error) {
    console.log(error.toString());
  }
};
export const getMovie = async () => {
  try {
    const movie = await axios.get(
      `${movie_url}/discover/movie?&api_key=${movie_api}`
    );
    return movie;
  } catch (error) {
    console.log(error.toString());
  }
};