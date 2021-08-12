import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

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
        {(userContext) => (
          <div>
            {" "}
            MOVIE LIST{" "}
            {userContext.currentUser ? userContext.currentUser.name : ""}{" "}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
