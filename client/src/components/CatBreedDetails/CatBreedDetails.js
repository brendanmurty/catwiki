import { Component } from "react";

import "./CatBreedDetails.css";

/**
 * 
 * Component: CatBreedDetails
 * 
 * A block of summarised information about a cat breed.
 * 
 **/
class CatBreedDetails extends Component {
  render() {
    return (
      <section className="CatBreedDetails">
        <h1>
          {this.props.catbreed.name}
        </h1>

        <p>
          {this.props.catbreed.description}
        </p>

        <dl>
          <dt>Temperament</dt>
          <dd>{this.props.catbreed.temperament}</dd>
          <dt>Origin</dt>
          <dd>{this.props.catbreed.origin}</dd>
          {this.props.catbreed.vcahospitals_url ? (
          <>
          <dt>VCA link</dt>
          <dd>
            <a target="_blank" rel="noreferrer" href={this.props.catbreed.vcahospitals_url}>
              VCA Animal Hospitals - {this.props.catbreed.name}
            </a>
          </dd>
          </>
          ) : null}
          { this.props.catbreed.vetstreet_url ? (
          <>
          <dt>Vetstreet link</dt>
          <dd>
            <a target="_blank" rel="noreferrer" href={this.props.catbreed.vetstreet_url}>
              Vetstreet - {this.props.catbreed.name}
            </a>
          </dd>
          </>
          ) : null }
        </dl>
      </section>
    );
  }
}

export default CatBreedDetails;
