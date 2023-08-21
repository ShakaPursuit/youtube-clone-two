



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import SearchComponent from './SearchComponent'
import VideoDetailPage from './ShowPage'




import SingleVideo from './Componets/SingleVideo';

export default function App() {




  function SingleVideo () {
    async function fetch () {
     
      try {
        let result = await axios.get ("https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=arianagrande&key=AIzaSyDNyDPFuphvxkXMK-2JUb22KqkfdpICOTw")
     console.log(result);     
 
  }
catch (error){
   console.log(error);

}

}
  return (

  
  <input 
  type="search" 
  className="form-control" 
  placeholder="Search..." 
  aria-label="Search" 
  aria-describedby="basic-addon1"/>

  
    )
 
  }

return (

    <div className="App">
    <SingleVideo />

    </div>

import Home from './HomePage'


function App() {
 
  return (

    <Router>
      <div className="top"><Home/></div> 
      <Routes>
  <Route path="/" element={<SearchComponent />} />
  <Route path="/video/:videoId" element={<VideoDetailPage />} />
  </Routes>
    </Router>

  )
}





