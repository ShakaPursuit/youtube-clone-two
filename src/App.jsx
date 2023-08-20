

import './App.css'

import axios from 'axios';

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
  
<div className="input-group">
  
  <input 
  type="search" 
  className="form-control" 
  placeholder="Search..." 
  aria-label="Search" 
  aria-describedby="basic-addon1"/>
</div>
  
    )
 
  }

return (

    <div>App
    <SingleVideo />

    </div>
  )
}





