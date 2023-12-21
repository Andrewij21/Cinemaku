import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MediaItems = ({ movie }) => {
  return (
    <div className="max-w-[220px] min-w-[220px]">
      <div className="h-80 hover:scale-110 cursor-pointe">
        <Link to={"/detail"} state={{ movie }}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            // className=" bg-red-400 object-cover"
            className=" h-full w-full rounded-xl object-fill "
            alt={movie.title || movie.name}
          />
        </Link>
      </div>
      <div className="text-center py-4 mx-auto">
        <h4 className="text-ellipsis overflow-hidden">
          {movie.title || movie.name}
        </h4>
        <span className="block">
          {movie.first_air_date || movie.release_date}
        </span>
        <span className="block">{movie.vote_average}</span>
      </div>
    </div>
  );
};
MediaItems.propTypes = {
  movie: PropTypes.object,
};

export default MediaItems;
