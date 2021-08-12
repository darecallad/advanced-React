import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
  // state = { currentUser: { name: "Most" } };
  state = { currentUser: { name: "JOHN" } };
  render() {
    return (
      // <UserContext.Provider value={this.state.currentuser}>
      //   <div>
      //     <MoviePage />
      //   </div>
      // </UserContext.Provider>
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
