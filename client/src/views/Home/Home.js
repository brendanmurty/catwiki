import React from "react";
import Select from "react-select";

import logo from "assets/logo.svg";
import Loading from "components/Loading/Loading";
import "./Home.css";

function Home() {
  const [catBreeds, setCatBreeds] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/catbreed")
      .then((response) => response.json())
      .then((response) => {
        // Simplify the cat breeds data so it can be used by the select component
        let catBreedsSelect = [];
        response.forEach(catBreed => {
          catBreedsSelect.push({
            "value": catBreed.id,
            "label": catBreed.name
          });
        });

        setCatBreeds(catBreedsSelect);
      });
  }, []);

  return (
    <div className="Home">
      { !catBreeds ? (
        <Loading logo={logo} />
      ) : (
      <>
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
        </header>
        <main>
          <p>Cat breeds:</p>
          <Select options={catBreeds} />
        </main>
      </>
      )}
    </div>
  );
}

export default Home;
