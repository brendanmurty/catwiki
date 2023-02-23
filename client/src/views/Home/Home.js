import React, { Component } from "react";
import Select from "react-select";

import Loading from "components/Loading/Loading";
import ImageList from "components/ImageList/ImageList";
import logo from "assets/logo.svg";
import "./Home.css";
import CatBreedDetails from "components/CatBreedDetails/CatBreedDetails";

/**
 * 
 * View: Home
 * 
 * Displays a loading component until data from the API has been received,
 * then shows a cat breed select field, allowing the user to select a cat
 * breed. After a cat breed has been selected, images of cats with that
 * breed are listed below the select field.
 * 
 **/
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catBreeds: false,
      catBreedsData: false,
      catBreedSelected: false,
      catPhotos: false
    }

    this.catBreedSelected = this.catBreedSelected.bind(this);

    // Load the cat breeds list
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

        this.setState({ catBreedsData: response });
        this.setState({ catBreeds: catBreedsSelect });
      });
  }

  catBreedSelected(event) {
    // Clear previous cat breed and cat photos list so that the page doesn't show previous
    // data if the select field is emptied or a new field selection is awaiting results
    this.setState({
      catBreedSelected: false,
      catPhotos: false
    });

    if (event && event.value) {
      // Set the selected breed
      const selectedCatBreed = this.state.catBreedsData.find(catBreed => catBreed.id == event.value);
      this.setState({
        catBreedSelected: selectedCatBreed
      });

      // Load the photos for the selected cat breed
      fetch("/api/catphotosbybreed/" + event.value)
        .then((response) => response.json())
        .then((response) => {
          this.setState({ catPhotos: response });
        });
    }
  }

  render() {
    return (
      <div className="Home">
        { !this.state.catBreeds ? (
          <Loading logo={logo} />
        ) : (
        <>
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
          </header>
          <main>

            <Select
              autoFocus
              className="Home-select"
              isClearable="true"
              placeholder="Select a cat breed"
              options={this.state.catBreeds}
              onChange={this.catBreedSelected} />

            {this.state.catBreedSelected ? <CatBreedDetails catbreed={this.state.catBreedSelected} /> : null}

            { this.state.catPhotos ? <ImageList images={this.state.catPhotos} /> : null}
          </main>
        </>
        )}
      </div>
    );
  }
}

export default Home;
