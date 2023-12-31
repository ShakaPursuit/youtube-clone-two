import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./Componets/TopBar";
import VideoDetailPage from "./Componets/VideoDetailPage";
import AboutPage from "./Componets/AboutPage";
import Home from "./Componets/HomePage";

function App() {
  return (

    <>
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<VideoDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

    </Router>
    </>
  );
}

export default App;

