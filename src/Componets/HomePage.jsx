import SearchBar from "./SearchComponent";
import Videos from "./Videos";

function Home() {
  return (
    <>
      <main className="wrapper">
        <br></br>

        <section>
          <SearchBar />
        </section>

        <br></br>
        <br></br>

        <section>
          <Videos />
        </section>
      </main>
    </>
  );
}

export default Home;
