import axios from "axios";

const movie_url = import.meta.env.VITE_MOVIE_BASE_URL;
const movie_api = import.meta.env.VITE_MOVIE_API;

export const getMovieTrending = async () => {
  try {
    const movie = await axios.get(
      `${movie_url}/trending/movie/day?&api_key=${movie_api}`
    );
    return movie;
  } catch (error) {
    console.log(error.toString());
  }
};
