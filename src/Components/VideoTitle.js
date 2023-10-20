const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-24 py-[20%] absolute bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-6xl font-bold text-white ">{title}</h1>
      <p className="p-4 w-1/4 text-lg font-medium text-white">{overview}</p>
      <div>
        <button className="bg-white text-xl text-black p-4 px-8 font-semibold hover:bg-opacity-40">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-xl text-white p-4 px-8 opacity-70 mx-5">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
