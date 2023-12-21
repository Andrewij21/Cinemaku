import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const MediaItems = ({ movie, topic }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      // animate="visible"
      exit="hidden"
      whileInView="visible"
      className="max-w-[220px] min-w-[220px]"
    >
      <motion.div className="h-80 cursor-pointer rounded-lg overflow-clip">
        <Link
          to={"/detail"}
          state={{ id: movie.id, type: movie.media_type || topic }}
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            // src={`https://image.tmdb.org/t/p/w500/upmXGc1QovmPBU0mQJR2re6ruKd.jpg`}
            className=" h-full w-full object-fill"
            alt={movie.title || movie.name}
          />
        </Link>
      </motion.div>
      <div className="text-center py-4 mx-auto">
        <h4 className="text-ellipsis overflow-hidden">
          {movie.title || movie.name}
        </h4>
        <span className="block">
          {movie.first_air_date || movie.release_date}
        </span>
        <span className="block">{movie.vote_average}</span>
      </div>
    </motion.div>
  );
};
MediaItems.propTypes = {
  movie: PropTypes.object,
  topic: PropTypes.string,
};

export default MediaItems;
