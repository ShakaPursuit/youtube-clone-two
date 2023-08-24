import axios from 'axios';

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

const fetchVideoStatistics = async (videoId) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=statistics&id=${videoId}`);
      return response.data.items[0].statistics;
    } catch (error) {
      console.error('Error fetching video statistics:', error);
      return {};
    }
  };
  
  const fetchData = async (searchQuery, maxResults, displayOrder) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchQuery}%20&type=video&part=snippet&maxResults=${maxResults}&order=${displayOrder}&regionCode=US`);
      const videos = response.data.items;
      const videosWithStatistics = await Promise.all(
        videos.map(async (video) => {
          const statistics = await fetchVideoStatistics(video.id.videoId);
          return {
            id: video.id.videoId,
            snippet: video.snippet,
            statistics: statistics
          };
        })
      );
  
      return videosWithStatistics;
    } catch (error) {
      console.error('Error fetching videos:', error);
      return [];
    }
  };
  
export default fetchData