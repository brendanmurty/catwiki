import { Component } from "react";

import "./Loading.css";

/**
 * 
 * Component: Loading
 * 
 * A spinning logo and loading message.
 * 
 **/
class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <img src={this.props.logo} className="Loading-logo" alt="logo" />
        <p>Loading...</p>
      </div>
    );
  }
}

export default Loading;
