import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getMovieCredits,
  getMovieDetails,
  getTvCredits,
  getTvDetails,
} from "../api/mediaApi";

const Detail = () => {
  const {
    state: { id, type },
  } = useLocation();
  const [credits, setCredits] = useState([]);
  const [details, setDetails] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    // console.log(width);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  useEffect(() => {
    // console.log("masuk", id, type);

    if (type != "tv") {
      getMovieDetails(id)
        .then((res) => {
          const detail = res.data;
          setDetails(detail);
          console.log("movie masuk", detail);
        })
        .catch((e) => console.error({ e }));
      getMovieCredits(id).then((res) => {
        const casts = res.data.cast.slice(0, 6);
        setCredits(casts);
      });
    } else {
      // console.log("tv masuk", id, type);
      getTvDetails(id)
        .then((res) => {
          const detail = res.data;
          setDetails(detail);
          console.log("tv masuk", detail);
        })
        .catch((e) => console.error({ e }));
      getTvCredits(id)
        .then((res) => {
          const casts = res.data.cast.slice(0, 6);
          setCredits(casts);
        })
        .catch((e) => console.error({ e }));
    }
  }, [id, type]);

  return (
    <div className="flex justify-start text-white capitalize py-8 w-full gap-y-8 flex-col md:flex-row">
      <div className="bg-black max-h-[30rem] w-full md:min-w-[20rem] md:max-w-[20rem] rounded-lg overflow-clip mr-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            width > 767 ? details.poster_path : details.backdrop_path
          }`}
          // src={`https://image.tmdb.org/t/p/w500/4W2sH4CXzJ98ScuLGRij1KakzSv.jpg`}
          className="h-full w-full object-fill"
          alt={"film"}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-y-8">
          <h2 className="text-4xl min-w-fit tracking-wider font-semibold">
            {details.name || details.title}
          </h2>
          <ul className="flex flex-row flex-wrap capitalize gap-x-2 gap-y-4">
            {details &&
              details.genres.map((genre, i) => {
                return (
                  <li
                    className="rounded-full px-4 py-2 truncate outline outline-white text-xs lg:text-sm"
                    key={i}
                  >
                    {genre.name}
                  </li>
                );
              })}
          </ul>
          <p className="line-clamp-4 ">{details.overview || "no overview"}</p>
        </div>
        <div className="min-h-[15rem] mt-6">
          <h4 className="text-xl mb-2">casts</h4>
          <ul className="flex gap-x-2 flex-wrap">
            {credits.map((credit, i) => {
              return (
                <li className="" key={i}>
                  <div className="h-36 mx-auto rounded-lg overflow-clip">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}`}
                      className="h-full w-full object-fill"
                      alt={"film"}
                    />
                  </div>
                  <div className="pt-2 max-w-[100px] overflow-hidden">
                    <h4 className="">{credit.name}</h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;

// {
//     "adult": false,
//     "backdrop_path": "/TFTfzrkX8L7bAKUcch6qLmjpLu.jpg",
//     "id": 575264,
//     "title": "Mission: Impossible - Dead Reckoning Part One",
//     "original_language": "en",
//     "original_title": "Mission: Impossible - Dead Reckoning Part One",
//     "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
//     "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
//     "media_type": "movie",
//     "genre_ids": [
//         28,
//         53
//     ],
//     "popularity": 1345.436,
//     "release_date": "2023-07-08",
//     "video": false,
//     "vote_average": 7.761,
//     "vote_count": 1366
// }
