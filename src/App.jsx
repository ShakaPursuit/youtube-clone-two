import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchComponent from './SearchComponent'
import VideoDetailPage from './ShowPage'

import NavBar from './Componets/NavBar'

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

export default App

