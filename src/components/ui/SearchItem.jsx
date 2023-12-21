import PropTypes from "prop-types";
import whiteBg from "../../assets/White_background.png";
import { Link } from "react-router-dom";
SearchItem.propTypes = {
  item: PropTypes.object,
  contentHandler: PropTypes.func,
};

export default function SearchItem({ item, contentHandler }) {
  return (
    <Link
      to={"/detail"}
      state={{ id: item.id, type: item.media_type || "tv" }}
      onClick={contentHandler}
    >
      <div className="flex justify-between max-h-20 text-slate-200 shadow-md">
        <div className="flex w-[65px]">
          <div className="max-h-[5rem] min-w-[4rem] mx-auto rounded-lg overflow-clip">
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  : whiteBg
              }
              // src={`https://image.tmdb.org/t/p/w500/q8bkN1GvXqjs1ZGFYWViH9o2WDq.jpg`}
              className="h-full w-full object-fill"
              alt={"film"}
            />
          </div>
        </div>
        <div className=" w-4/6 px-2 overflow-hidden">
          <p className="text-sm line-clamp-2 font-bold tracking-wide text-white">
            {item.title || item.name}
          </p>
          <p className="text-xs mt-2">Popularity: {item.popularity}</p>
        </div>
        <div className="font-bold">
          <p className="text-xs  ">
            {item.first_air_date || item.release_date}
          </p>
        </div>
      </div>
    </Link>
  );
}
