import { useParams } from "react-router-dom";
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
      <ShowPage />
    </>
  );
};
export default VideoDetailPage;
