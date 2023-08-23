import { useState } from "react";
import { Link } from "react-router-dom";
import Videos from "./Videos";
import fetchData from "./API";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery) {
      const fetchedVideos = await fetchData(searchQuery);
      setVideos(fetchedVideos);
    }
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for videos"
        />
        <button type="submit">Search</button>
      </form>
      {videos.length > 0 ? null : <Videos />}
      <br></br>
      <br></br>
      <br></br>
      <div className="scroll"></div>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <Link to={`/video/${video.id.videoId}`} >
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
              <h3>{video.snippet.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
