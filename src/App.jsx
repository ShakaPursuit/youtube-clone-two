import AboutPage from "./AboutPage";
import Home from "./HomePage";
import VideoDetailPage from "./VideoDetailPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css"



function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

