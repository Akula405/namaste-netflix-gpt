import { useSelector } from "react-redux";
import useGetMovieTrailer from "../CustomHooks/useGetMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailerVideoKey = useSelector(
    (store) => store?.movies?.movieTrailer?.key
  );
  useGetMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
