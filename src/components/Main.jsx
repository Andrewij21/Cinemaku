import { useEffect, useState } from "react";
import avanger from "../../public/avanger.jpg";
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
      <h2 className="text-2xl text-slate-200 mb-4">Movies</h2>
      <div className="text-white flex flex-wrap  justify-start items-start gap-12 min-w-full">
        {tranding.map((movie) => {
          return (
            <div
              className="shadow-lg items-start shadow-black rounded-xl w-1/6 h-auto overflow-hidden"
              key={movie.id}
            >
              <img
                src={avanger}
                // className=" bg-red-400 object-cover"
                className=" w-full rounded-lg object-cover object-center"
                alt={movie.title}
              />
              <div className="text-center p-4 leading-relaxed ">
                <h4 className="">{movie.title}</h4>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
