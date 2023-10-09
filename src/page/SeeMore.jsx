import PropTypes from "prop-types";
import MediaList from "../components/media/MediaList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const URL = {
  tranding: "/trending/all/day",
  movies: "/discover/movie",
  tv: "/discover/tv",
};
const movie_url = import.meta.env.VITE_MOVIE_BASE_URL;
const movie_api = import.meta.env.VITE_MOVIE_API;
const SeeMore = () => {
  const { state } = useLocation();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const title = state.title || "";
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    const getPhoto = async () => {
      try {
        const { data } = await axios.get(
          `${movie_url}${URL[title]}?&api_key=${movie_api}`
        );

        isMounted && setContent(data.results);
        console.log(data);
        // setCount(data.pagination.totalPages);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setContent([]);
      }
    };
    getPhoto();
    return () => {
      isMounted = false;
    };
  }, [title]);
  return (
    <div>
      {/* {error && <div>{error}</div>} */}
      {loading && <div className="text-white text-2xl">Loading...</div>}
      <MediaList topic={content} title={state.title} />
    </div>
  );
};

SeeMore.propTypes = {
  topic: PropTypes.array,
  title: PropTypes.string,
};
export default SeeMore;
