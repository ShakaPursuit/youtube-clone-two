

import './App.css'



export default function App() {





fetch ("https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDNyDPFuphvxkXMK-2JUb22KqkfdpICOTw")          
  .then(response => response.json())
  .then(data => console.log(data));
  return (
  
<div className="input-group">
  
  <input 
  type="search" 
  className="form-control" 
  placeholder="Search..." 
  aria-label="Search" 
  aria-describedby="basic-addon1"/>
</div>
  
)


return (

    <div>App</div>

)
  }

  



