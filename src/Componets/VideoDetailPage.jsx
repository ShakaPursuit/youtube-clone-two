import { useParams, Link } from "react-router-dom";
import ShowPage from "./Show";

const VideoDetailPage = () => {
  const { videoId } = useParams();

  return (
    <>
      <div className="single-video" key={Math.random()*1000}>
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
