import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SearchComponent from './SearchComponent'
import VideoDetailPage from './ShowPage'

import NavBar from './Componets/NavBar'

import Home from './HomePage'


function App() {
 
  return (

    <Router>
      <Routes>
  <Route path="/" element={<SearchComponent />} />
  <Route path="/video/:videoId" element={<VideoDetailPage />} />
  </Routes>
    </Router>


  
   
    
    <>
      <div>
      <div className="top"><Home/></div> 
        {/* <NavBar/> */}
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
     
      {/* <h1>Vite + React!!!!!!!!!!!</h1>
 
      <h1>Christine</h1>
      <h1>Vite + React + Jesse</h1>

      <h1>Vite + React + Jesse Attempt 2</h1>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more!!!
      </p> */}
    </>


  )
}

export default App

