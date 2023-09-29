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
      <div className="text-white flex flex-wrap  justify-start items-start gap-12 min-w-full">
        {tranding.map((movie) => {
          return (
            <div
              className="items-start basis-1/6 h-auto rounded-xl overflow-hidden "
              key={movie.id}
            >
              <div className="h-80 bg-black">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  // className=" bg-red-400 object-cover"
                  className=" h-full w-full rounded-lg object-cover object-center"
                  alt={movie.title}
                />
              </div>
              <div className="text-left py-4 ">
                <h4 className="inline-block ">
                  <span className="text-ellipsis overflow-hidden">
                    {movie.title}
                  </span>
                  <span className="inline-block ml-1 mb-3">
                    ({movie.release_date.substr(0, 4)})
                  </span>
                  {/* <span className="block">{movie.vote_average}</span> */}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
