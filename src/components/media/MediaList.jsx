import PropTypes from "prop-types";
import MediaItems from "./MediaItems";
import { Link } from "react-router-dom";

const MediaList = ({ topic, title, link }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-slate-200 mb-4 text-center md:text-left capitalize relative">
        {title}
        <span>
          <Link
            to={"/seemore"}
            state={{ title }}
            className={`text-sm absolute right-0 bottom-0 cursor-pointer hover:text-rose-600 ${
              link ? "" : "invisible"
            }`}
          >
            see more
          </Link>
        </span>
      </h2>
      <div className="text-white flex flex-wrap w-full max-w-full  ">
        {topic.map((movie) => {
          return <MediaItems key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

MediaList.propTypes = {
  topic: PropTypes.array,
  title: PropTypes.string,
  link: PropTypes.bool,
};

export default MediaList;
