import { Component } from "react";

import "./CatBreedDetails.css";

class CatBreedDetails extends Component {
  render() {
    return (
      <section className="CatBreedDetails">
        <h3>
          {this.props.catbreed.name}
        </h3>
        <p>
          {this.props.catbreed.description}
        </p>
        <dl>
          <dt>Temperament</dt>
          <dd>{this.props.catbreed.temperament}</dd>
          <dt>Origin</dt>
          <dd>{this.props.catbreed.origin}</dd>
          <dt>VCA link</dt>
          <dd>
            <a target="_blank" rel="noreferrer" href={this.props.catbreed.vcahospitals_url}>
              VCA Animal Hospitals - {this.props.catbreed.name}
            </a>
          </dd>
          <dt>Vetstreet link</dt>
          <dd>
            <a target="_blank" rel="noreferrer" href={this.props.catbreed.vetstreet_url}>
              Vetstreet - {this.props.catbreed.name}
            </a>
          </dd>
        </dl>
      </section>
    );
  }
}

export default CatBreedDetails;
