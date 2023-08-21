import SearchComponent from "./SearchComponent";
import SearchBar from "./SearchBar";
import ShowPage from "./Show";
import TopBar from "./TopBar";
import Videos from "./Videos";


 function Home(){

return(<>
<TopBar/>

<main className="wrapper">
    <br></br>

   <section><SearchComponent/></section> 

   <br></br><br></br>

</main>
<ShowPage/>

</>);

}

export default Home