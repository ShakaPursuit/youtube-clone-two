import SearchBar from "./SearchComponent";
import TopBar from "./TopBar";
import Videos from "./Videos";

function Home() {
  return (
    <>
      {/* <TopBar /> */}

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
