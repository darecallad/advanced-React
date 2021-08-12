import React, { Component } from "react";
import UserContext from "./userContext";

// class MovieList extends Component {
//   static contextType = UserContext;
//   componentDidMount() {
//     console.log("context", this.context);
//   }
//   render() {
//     return (
//       <UserContext.Consumer>
//         {(userCuntext) => <div>Movie List{userCuntext.name}</div>}
//       </UserContext.Consumer>
//     );
//   }
// }

// // MovieList.contextType = UserContext;

// export default MovieList;

class MovieList extends Component {
  static contextType = UserContext;
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => <div> MOVIE LIST {userContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;