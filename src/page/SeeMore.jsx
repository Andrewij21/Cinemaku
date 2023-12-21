import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MediaItems from "../components/media/MediaItems";
import { useEffect, useState } from "react";
import { getTrending, getTv, getMovie } from "../api/mediaApi";

const contents = {
  trending: getTrending(),
  tv: getTv(),
  movies: getMovie(),
};

const SeeMore = () => {
  const [content, setContent] = useState([]);
  const { state } = useLocation();
  const title = state.title || "";
  useEffect(() => {
    let isMounted = false;
    contents[title]
      .then((res) => {
        isMounted = true;
        window.scrollTo(0, 0);
        const payload = res.data.results;
        isMounted && setContent(payload);
      })
      .catch((e) => {
        console.log(e.toString());
      });
    return () => (isMounted = false);
  }, [title]);

  return (
    <div>
      <h2 className="text-2xl mb-6 py-4 text-center capitalize text-white">
        {title}
      </h2>
      <motion.div className="text-white flex flex-wrap justify-center gap-x-2 gap-y-4">
        {content.map((movie) => {
          return <MediaItems key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </div>
  );
};

SeeMore.propTypes = {
  topic: PropTypes.array,
  title: PropTypes.string,
};
export default SeeMore;
