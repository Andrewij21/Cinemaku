import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovieCredits, getMovieDetails } from "../api/mediaApi";

const Detail = () => {
  const {
    state: { movie },
  } = useLocation();
  console.log(movie);
  const [credits, setCredits] = useState([]);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getMovieCredits(movie.id).then((res) => {
      const casts = res.data.cast.slice(0, 6);
      setCredits(casts);
    });
    getMovieDetails(movie.id).then((res) => {
      const detail = res.data.;
      setDetails(detail);
      console.log("noh", res);
    });
  }, [movie.id]);

  // const cast = (
  //   <li className="">
  //     <div className="h-36 mx-auto ">
  //       <img
  //         src={`https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg`}
  //         // className=" bg-red-400 object-cover"
  //         className=" h-full w-full rounded-md object-contain object-center"
  //         alt={"film"}
  //       />
  //     </div>
  //     <div className="pt-2">
  //       <h4 className="overflow-hidden">maximus</h4>
  //     </div>
  //   </li>
  // );
  return (
    <div
    //   className={`h-screen w-full max-h-[32rem]
    // p-24
    // relative
    // overflow-hidden
    // block
    // z-10

    // bg-no-repeat
    // bg-center
    // bg-cover bg-[url('https://image.tmdb.org/t/p/w500/TFTfzrkX8L7bAKUcch6qLmjpLu.jpg')]

    // before:absolute
    // before:inset-0
    // before:block
    // before:bg-gradient-to-t
    // before:from-black
    // before:z-[-5]

    // `}
    >
      <div
      // src={`https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg`}
      // className=" bg-red-400 object-cover"
      // className={`h-screen w-full max-h-[32rem]
      // relative
      // overflow-hidden
      // block
      // bg-cover bg-[url('https://image.tmdb.org/t/p/w500/TFTfzrkX8L7bAKUcch6qLmjpLu.jpg')] `}
      // alt={"film"}
      ></div>
      <div className="flex justify-center md:px-12 mt-12 gap-4 text-white capitalize">
        <div className="basis-1/4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            // className=" bg-red-400 object-cover"
            className=" min-h-[28rem] mx-auto rounded-xl object-contain object-center"
            alt={"film"}
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-between">
          <h2 className="text-4xl min-w-fit tracking-wider font-semibold">
            {movie.title}
          </h2>
          {/* list of category */}
          <ul className="flex flex-row pt-4 capitalize gap-2">
            <li className="rounded-full px-4 py-1 outline outline-white text-sm">
              comady
            </li>
            <li className="rounded-full px-4 py-1 outline outline-white text-sm">
              drama
            </li>
            <li className="rounded-full px-4 py-1 outline outline-white text-sm">
              action
            </li>
          </ul>
          <div className="py-6">
            <p className="line-clamp-4 ">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, iusto adipisci? Consectetur accusamus sed illum ea
              commodi optio repudiandae ipsam. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Pariatur, neque est dolore magnam
              alias odio ea dicta. Magnam, tempora cupiditate? Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Rem repellendus excepturi
              odit, nisi ut dignissimos accusamus maxime id ratione error,
              aliquid rerum, ex iste fugiat quaerat voluptas dolore distinctio
              commodi? */}
              {movie.overview}
            </p>
          </div>
          <div className="">
            <h4 className="text-xl mb-2">casts</h4>
            <ul className="flex flex-row items-end gap-2">
              {credits.map((credit, i) => {
                return (
                  <li className="" key={i}>
                    <div className="h-36 mx-auto ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}`}
                        // className=" bg-red-400 object-cover"
                        className=" h-full w-full rounded-md object-contain object-center"
                        alt={"film"}
                      />
                    </div>
                    <div className="pt-2 h-12">
                      <h4 className="overflow-hidden">{credit.name}</h4>
                    </div>
                  </li>
                );
              })}
              {/* {cast}
              {cast}
              {cast} */}
            </ul>
          </div>
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
