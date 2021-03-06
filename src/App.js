import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import Login from "./context/login";

class App extends Component {
  // state = { currentUser: { name: "Most" } };
  handleLoggedIn = (username) => {
    console.log("Getting the user : " + username);
    const user = { name: "JOHN" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };
  render() {
    return (
      // <UserContext.Provider value={this.state.currentuser}>
      //   <div>
      //     <MoviePage />
      //   </div>
      // </UserContext.Provider>
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
