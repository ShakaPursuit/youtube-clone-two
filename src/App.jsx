import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchComponent from './Componets/SearchComponent'
import VideoDetailPage from './Componets/ShowPage'

import NavBar from './Componets/NavBar'

import Home from './Componets/HomePage'


function App() {
 
  return (

    <Router>
      <div className="top"><Home/></div> 
      <Routes>
  <Route path="/video/:videoId" element={<VideoDetailPage />} />
  </Routes>
    </Router>
  )
}

export default App

