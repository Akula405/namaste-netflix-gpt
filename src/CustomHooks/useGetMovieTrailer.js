import { useEffect } from "react";
import { options } from "../utills/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utills/movieSlice";
const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();
    //console.log("Videos", json);
    const filteredTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    //if there is no trailer take any video of the movie
    const trailer = filteredTrailers.length
      ? filteredTrailers[0]
      : json?.results[0];
    console.log("Trailer", trailer);

    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return <div></div>;
};

export default useGetMovieTrailer;
