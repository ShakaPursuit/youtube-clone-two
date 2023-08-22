
import SearchBar from "./SearchBar";
import ShowPage from "./Show";
import TopBar from "./TopBar";
import Videos from "./Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


 
 
 

 function Home(){



return(<>
<TopBar/>


<main className="wrapper">
    <br></br>

   <section><SearchBar/></section> 

   <br></br><br></br>


   <section><Videos/></section>

  

 











</main>
{/* <ShowPage/> */}




</>);





}

export default Home