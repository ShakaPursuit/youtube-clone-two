import { useParams } from "react-router-dom";
import ShowPage from "./Show";

// iframe is an HTML element used to embed content from a third party source
// in this case it embed the youtube video with the dynamic videoId
// when users navigate to the url iframes takes it and embeds it allowing the user to watch the video without having to go to youtube
// useParams() is a hook that returns an object containing route parameters extracted form current URL
// In this example we use destructuring to extract the value of videoId parameter from the object returned by useParams
// https://www.youtube.com/embed/ is the base URL for embedding Youtube videos and ${videoId} is the placeholder that is replaced with the actual value of videoId variable.
const VideoDetailPage = () => {
    const { videoId } = useParams();

    return (
        <>
        <div className="single-video">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="Youtube Video" allowFullScreen></iframe>
        </div>
        <ShowPage />
        </>
    )

}
export default VideoDetailPage