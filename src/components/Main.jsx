import { useEffect, useState } from "react";
// import avanger from "../../public/avanger.jpg";
import { getTrending, getMovie } from "../api/mediaApi";
import MediaList from "./media/MediaList";

const Main = () => {
  const [tranding, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const contents = [
    { topic: tranding, title: "tranding" },
    { topic: movies, title: "movies" },
  ];
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
      {contents.map((content, i) => {
        return (
          <MediaList tranding={content.topic} title={content.title} key={i} />
        );
      })}
    </main>
  );
};

export default Main;
