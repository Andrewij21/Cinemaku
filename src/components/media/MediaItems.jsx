import PropTypes from "prop-types";

const MediaItems = ({ movie }) => {
  return (
    <div className="items-start h-auto rounded-xl overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col">
      <div className="h-80 mx-auto   ">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          // className=" bg-red-400 object-cover"
          className=" h-full w-full rounded-lg object-contain  object-center"
          alt={movie.title || movie.name}
        />
      </div>
      <div className="text-center py-4 mx-auto">
        <h4 className="text-ellipsis overflow-hidden">
          {movie.title || movie.name}
        </h4>
        <span className="block">
          {/* ({movie.release_date.substr(0, 4)}) */}
          {movie.first_air_date || movie.release_date}
        </span>
        <span className="block">{movie.vote_average}</span>
      </div>
    </div>
  );
};
MediaItems.propTypes = {
  movie: PropTypes.array,
};

export default MediaItems;
