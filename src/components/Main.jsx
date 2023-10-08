import { useEffect, useState } from "react";
// import avanger from "../../public/avanger.jpg";
import { getTrending, getMovie } from "../api/mediaApi";
import MediaList from "./media/MediaList";

const Main = () => {
  const [tranding, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let isMounted = false;
    getTrending()
      .then((res) => {
        isMounted = true;
        const tranding = res.data.results.slice(0, 6);
        // console.log({ tranding });
        isMounted && setTrending(tranding);
      })
      .catch((e) => {
        console.log(e.toString());
      });
    getMovie()
      .then((res) => {
        isMounted = true;
        const movies = res.data.results.slice(0, 6);
        // console.log({ movies });
        isMounted && setMovies(movies);
      })
      .catch((e) => {
        console.log(e.toString());
      });

    return () => (isMounted = false);
  }, []);
  console.log({ tranding });
  console.log({ movies });
  return (
    <main className="">
      <MediaList tranding={tranding} title={"tranding"} />
    </main>
  );
};

export default Main;
