import SearchBar from "./SearchComponent";


function Home() {

  
  return (
    <>
      <main className="wrapper">
        <br></br>

        <section>
          <SearchBar key={Math.random()*1000}/>
        </section>

        <br></br>
        <br></br>

        
      </main>
    </>
  );
}

export default Home;
