import { useState } from 'react'
import { Link } from 'react-router-dom'
import Videos from './Videos'
import fetchData from './API'
const SearchBar = () => {
const [searchQuery, setSearchQuery] = useState('')
const [videos, setVideos] = useState([]);
const [maxResults, setMaxResults] = useState(0);
const [displayOrder, setDisplayOrder] = useState('relevance');
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery) {
      let order = displayOrder;
      if (displayOrder === 'viewCountHigh') {
        order = 'viewCount';
      } else if (displayOrder === 'viewCountLow') {
        order = '-viewCount';
      }
      const fetchedVideos = await fetchData(searchQuery, maxResults, order)
      console.log("fetchedVideos:", fetchedVideos)
      setVideos(fetchedVideos)
    }
  }
  const handleMaxResultsChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= 1) {
      setMaxResults(newValue);
    }
  };
  const handleDisplayOrderChange = (event) => {
    setDisplayOrder(event.target.value);
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
        <input
        type="number"
        value={maxResults}
        onChange={handleMaxResultsChange}
        placeholder="Max Results"
        min="1"
      />
        <button type="submit">Search</button>
        <select value={displayOrder} onChange={handleDisplayOrderChange}>
        <option value="relevance">Relevance</option>
        <option value="date">Date</option>
        <option value="title">Title</option>
        <option value="viewCountHigh">View Count (Highest First)</option>
        <option value="viewCountLow">View Count (Lowest First)</option>
      </select>
      </form>
      {videos.length > 0 ?  null : < Videos />}
      <br></br><br></br><br></br>
      <div className="video-list">
        {videos.map((video) => (
            <div key={video.id.videoId} className="video-item">
                <Link to={`/video/${video.id.videoId}`}>
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    <h3>{video.snippet.title}</h3>
                    <p>Published on: {new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                    <p>Description: {video.snippet.description}</p>
                    <p>Channel: {video.snippet.channelTitle}</p>
                    {video.statistics && (
                      <div>
                        <p>View Count: {parseInt(video.statistics.viewCount).toLocaleString()}</p>
                        <p>Like Count: {parseInt(video.statistics.likeCount).toLocaleString()}</p>
                      </div>
                    )}
                </Link>
                </div>
        ))}
      </div>
    </div>
  )
}
export default SearchBar;
