import { useEffect, useState } from "react";
// import avanger from "../../public/avanger.jpg";
import { getTrending } from "../api/mediaApi";
import MediaList from "./media/MediaList";

const Main = () => {
  const [tranding, setTrending] = useState([]);
  useEffect(() => {
    let isMounted = false;
    getTrending()
      .then((res) => {
        isMounted = true;
        console.log(res);
        const movies = res.data.results.slice(0, 6);
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
      <MediaList tranding={tranding} title={"tranding"} />
    </main>
  );
};

export default Main;
