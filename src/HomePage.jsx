import SearchBar from "./SearchBar";
import ShowPage from "./Show";
import TopBar from "./TopBar";
import Videos from "./Videos";

 function Home(){



return(<>
<TopBar/>


<main className="wrapper">
    <br></br>

   <section><SearchBar/></section> 

   <br></br><br></br>


   <section><Videos/></section>

  

 











</main>
<ShowPage/>




</>);

//     return (
//     <div className="container">
  
//     <header className="header">


//         <a>Youtube</a><br></br><br></br>&nbsp; 
//         <a>Home</a><br></br>&nbsp; 
//         <a>About</a>
     



//     </header><br></br><br></br>
  

//    <>
//    <input className="sB"type="text" ></input><button>Search</button><br></br>
//    <br></br><br></br><br></br>
   
   
   
//    </>


// {/*  */}

  

//     <div className="videos">No Search Results Yet! Please Submit a search above!</div>
    
    
    
//     </div>
    
//    );
 


}

export default Home