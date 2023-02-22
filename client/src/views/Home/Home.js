import React from "react";

import logo from "assets/logo.svg";
import Loading from "components/Loading/Loading";
import "./Home.css";

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/catbreed")
      .then((res) => res.json())
      .then((data) => setData("Found " + data.length + " cat breeds"));
  }, []);

  React.useEffect(() => {
    fetch("/api/catphotosbybreed/beng")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="Home">
      { !data ? (
        <Loading logo={logo} />
      ) : (
      <>
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
        </header>
        <main>
          <p>{data}</p>
        </main>
      </>
      )}
    </div>
  );
}

export default Home;
