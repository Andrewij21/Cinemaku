import PropTypes from "prop-types";
import MediaItems from "./MediaItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";

const MediaList = ({ topic, title }) => {
  const carousel = useRef(null);

  return (
    <div className="mt-10 min-h-[500px]">
      <div className="flex justify-between items-center text-slate-200">
        <h2 className="text-2xl mb-4 text-center md:text-left capitalize">
          {title}
        </h2>
        <Link
          to={"/seemore"}
          state={{ title }}
          className={`text-sm cursor-pointer hover:text-rose-600`}
        >
          see more
        </Link>
      </div>
      <motion.div ref={carousel} className="overflow-hidden cursor-grab flex">
        <motion.div
          drag="x"
          dragConstraints={carousel}
          className="text-white flex gap-x-5  "
        >
          {topic.map((movie) => {
            return <MediaItems key={movie.id} movie={movie} topic={title} />;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

MediaList.propTypes = {
  topic: PropTypes.array,
  title: PropTypes.string,
};

export default MediaList;
