// import React from "react";
// import UserContext from "./userContext";
// import { useContext } from "react";

// function MovieRow(props) {
//   const currentUser = useContext(UserContext);
//   return <div>{currentUser.name}</div>;
// }
// export default MovieRow;

import React from "react";
import UserContext from "./userContext";
import { useContext } from "react";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      Movie Row {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
