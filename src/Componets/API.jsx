import axios from 'axios';
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
const fetchData = async (searchQuery, maxResults, displayOrder) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchQuery}%20&type=video&part=snippet&maxResults=${maxResults}&order=${displayOrder}&regionCode=US`)
        const videos = response.data.items;
        return videos;
    } catch (error) {
        console.error('Error fetching videos:', error)
        return []
    }
}
export default fetchData
