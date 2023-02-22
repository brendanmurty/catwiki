import React from "react";

import logo from "assets/logo.svg";
import "./Home.css";

function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/catbreed")
      .then((res) => res.json())
      .then((data) => setData("Found " + data.length + " cat breeds"));
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default Home;
