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
export const getTv = async () => {
  try {
    const movie = await axios.get(
      `${movie_url}/discover/tv?&api_key=${movie_api}`
    );
    return movie;
  } catch (error) {
    console.log(error.toString());
  }
};
export const getMovieCredits = async (movie_id) => {
  try {
    const movie = await axios.get(
      `${movie_url}/movie/${movie_id}/credits?&api_key=${movie_api}`
    );
    return movie;
  } catch (error) {
    console.log(error.toString());
  }
};
export const getTvCredits = async (tv_id) => {
  try {
    const tv = await axios.get(
      `${movie_url}/tv/${tv_id}/credits?&api_key=${movie_api}`
    );
    return tv;
  } catch (error) {
    console.log(error.toString());
  }
};
export const getMovieDetails = async (movie_id) => {
  try {
    const movie = await axios.get(
      `${movie_url}/movie/${movie_id}?&api_key=${movie_api}`
    );
    return movie;
  } catch (error) {
    console.log(error.toString());
  }
};
export const getTvDetails = async (tv_id) => {
  try {
    const tv = await axios.get(
      `${movie_url}/tv/${tv_id}?&api_key=${movie_api}`
    );
    return tv;
  } catch (error) {
    console.log(error.toString());
  }
};
export const search = async (query) => {
  try {
    const tv = await axios.get(
      `${movie_url}/search/multi?query=${query}&api_key=${movie_api}`
    );
    return tv;
  } catch (error) {
    console.log(error.toString());
  }
};
