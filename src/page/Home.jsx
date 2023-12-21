import { useEffect, useState } from "react";
// import avanger from "../../public/avanger.jpg";
import { getTrending, getMovie, getTv } from "../api/mediaApi";
import MediaList from "../components/media/MediaList";

const Main = () => {
  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const contents = [
    { topic: trending, title: "trending" },
    { topic: movies, title: "movies" },
    { topic: tv, title: "tv" },
  ];
  useEffect(() => {
    let isMounted = false;
    getTrending()
      .then((res) => {
        isMounted = true;
        const trending = res.data.results.slice(0, 10);
        // console.log({ tranding });
        isMounted && setTrending(trending);
      })
      .catch((e) => {
        console.log(e.toString());
      });
    getMovie()
      .then((res) => {
        isMounted = true;
        const movies = res.data.results.slice(0, 10);
        // console.log({ movies });
        isMounted && setMovies(movies);
      })
      .catch((e) => {
        console.log(e.toString());
      });
    getTv()
      .then((res) => {
        isMounted = true;
        const tvSeries = res.data.results.slice(0, 10);
        // console.log({ movies });
        isMounted && setTv(tvSeries);
      })
      .catch((e) => {
        console.log(e.toString());
      });

    return () => (isMounted = false);
  }, []);
  console.log({ trending });
  console.log({ movies });
  return (
    <div className="">
      {contents.map((content, i) => {
        return (
          <MediaList topic={content.topic} title={content.title} key={i} />
        );
      })}
    </div>
  );
};

export default Main;
