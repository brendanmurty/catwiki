import { Component } from "react";

import "./ImageList.css";

class ImageList extends Component {
  render() {
    return (
      <section className="ImageList">
        <h2>Photos</h2>

        <ul className="ImageList-list">
          {this.props.images.map(image => (
          <li key={image.cfa_url}>
            <img src={image.url} alt={'Image of an ' + image.breeds[0].name + ' cat'} />
          </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ImageList;
