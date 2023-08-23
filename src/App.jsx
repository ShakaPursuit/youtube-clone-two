import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import VideoDetailPage from './Componets/VideoDetailPage'
import TopBar from './Componets/TopBar'
import AboutPage from './Componets/AboutPage'


import NavBar from './Componets/NavBar'

import Home from './HomePage'


function App() {
  return (
    <Router>

        <TopBar />

        {/* <NavBar/> */}
        
   
     
   
     
     
     <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/video/:videoId" element={<VideoDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      </Routes>
   </Router>
   


  )
}

export default App





