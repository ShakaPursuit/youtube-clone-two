import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchComponent from './SearchComponent'
import VideoDetailPage from './ShowPage'

function App() {
 
  return (
    <Router>
      <Routes>
  <Route path="/" element={<SearchComponent />} />
  <Route path="/video/:videoId" element={<VideoDetailPage />} />
  </Routes>
    </Router>
  )
}

export default App
