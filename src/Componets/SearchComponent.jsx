import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Videos from './Videos'
import fetchData from './API'


const historyFromLocalStorage=JSON.parse(sessionStorage.getItem('history')||'[]')//this parses and returns the local storage set to variable

console.log(historyFromLocalStorage)
const SearchBar = () => {
  useEffect(() => {
    window.sessionStorage.setItem("history",
     JSON.stringify(historyArr),[historyArr] );//using hook to catch the data
  });
  
  const [searchQuery, setSearchQuery] = useState('')
  const [videos, setVideos] = useState([]);
  const [maxResults, setMaxResults] = useState(0);
  const [displayOrder, setDisplayOrder] = useState('relevance');
  const[history,setHistory]=useState('');
  const[historyArr,setHistoryArr]=useState(historyFromLocalStorage);// setting historyArr state to the local storage
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  
  
  
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery) {
      
    }
    
      
      let order = displayOrder;
      if (displayOrder === 'viewCountHigh') {
        order = 'viewCount';
      } else if (displayOrder === 'viewCountLow') {
        order = '-viewCount';
      }
      const fetchedVideos = await fetchData(searchQuery, maxResults, order)
      console.log("fetchedVideos:", fetchedVideos)
      setVideos(fetchedVideos)
      // setHistory(searchQuery)
      setHistoryArr((prevArr) => [...prevArr,searchQuery]);
    
    }

  
  
  // useEffect(() => {
  //     window.sessionStorage.setItem("history",
  //      JSON.stringify(historyArr),[historyArr] );//using hook to catch the data
  //   },);
      //when pressing refresh then back  icon local storage stays

      //when pressing About link then back icon local storage stays

      // when pressing refesh by itself the local storage stays

      //when pressing home link the local storage deletes the last index key val pair

 




      


      
     

       
            
        
        
        
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
      <form  id="form" onSubmit={handleSearchSubmit}>
       <label> 🔍&nbsp;  <input
       name='Search'
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for videos"
        /></label> 
       <br></br> <label >#️⃣ of 🎥 <input
        name='resultCount'
        type="number"
        value={maxResults}
        onChange={handleMaxResultsChange}
        placeholder="Max Results"
        min="1"
      />&nbsp;&nbsp;&nbsp;</label>
        <button type="submit" >Search</button><br></br>
        <select id={"relevance"} value={displayOrder} onChange={handleDisplayOrderChange}>
        <option value="relevance">Relevance</option>
        <option value="date">Date</option>
        <option value="title">Title</option>
        <option value="viewCountHigh">View Count (Highest First)</option>
        <option value="viewCountLow">View Count (Lowest First)</option>
      </select>
      </form>
      <legend id="search-history" >Search History
      <div  id="search-history"className='search-History' name="search-History">{([...historyArr+""])}
      
      </div>
      </legend>
      {videos.length > 0 ?  null : < Videos />}
      <br></br><br></br><br></br>
      <div className='container'>

     
      <div className="video-list" key={Math.random()*1000}>
        {videos.map((video) => (
          <div className='scroll-menu' key={Math.random()*1000}>
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
                </div>
        ))}
      </div>
        </div>
      </div>
   
  )
}
export default SearchBar;









