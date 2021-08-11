import React, { Component } from "react";
import withTooltip from "./withTooltop";

class Movie extends Component {
  render() {
    return (
      <div>
        Movie
        {this.props.showTooltip && <div>Some tool tips </div>}
      </div>
    );
  }
}

export default withTooltip(Movie);
