import { useParams, Link } from "react-router-dom";
import ShowPage from "./Show";

const VideoDetailPage = () => {
  const { videoId } = useParams();

  return (
    <>
      <div className="single-video">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Youtube Video"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <ShowPage />
    </>
  );
};
export default VideoDetailPage;
