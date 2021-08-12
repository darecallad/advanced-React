import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;
  componentDidMount() {
    console.log("context", this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userCuntext) => <div>Movie List{userCuntext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

// MovieList.contextType = UserContext;

export default MovieList;
