import PropTypes from "prop-types";
import MediaItems from "./MediaItems";

const MediaList = ({ topic, title }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl text-slate-200 mb-4 text-center md:text-left capitalize">
        {title}
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
};

export default MediaList;
