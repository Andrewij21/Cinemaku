import { useEffect, useState } from "react";
// import avanger from "../../public/avanger.jpg";
import { getMovieTrending } from "../api/movieApi";

const Main = () => {
  const [tranding, setTrending] = useState([]);
  useEffect(() => {
    let isMounted = false;
    getMovieTrending()
      .then((res) => {
        isMounted = true;
        console.log(res);
        const movies = res.data.results;
        console.log({ movies });
        isMounted && setTrending(movies);
      })
      .catch((e) => {
        console.log(e.toString());
      });

    return () => (isMounted = false);
  }, []);
  console.log({ tranding });
  return (
    <main className="">
      <h2 className="text-2xl text-slate-200 mb-4">Tranding</h2>
      <div className="text-white flex flex-wrap w-full max-w-full   ">
        {tranding.map((movie) => {
          return (
            <div
              className="items-start h-auto rounded-xl overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 flex flex-col"
              key={movie.id}
            >
              <div className="h-80 mx-auto   ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  // className=" bg-red-400 object-cover"
                  className=" h-full w-full rounded-lg object-contain  object-center"
                  alt={movie.title}
                />
              </div>
              <div className="text-center py-4 mx-auto">
                <h4 className="text-ellipsis overflow-hidden">{movie.title}</h4>
                <span className="block mt-2">
                  ({movie.release_date.substr(0, 4)})
                </span>
                <span className="block">{movie.vote_average}</span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
