import React from "react";
import { Fragment, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times`);
  //   useEffect(() => {
  //     document.title = `${name} has clicked ${count} times`;
  //     return () => {
  //       console.log("clean up");
  //     };
  //   }, [count]); // only count change the document.title will be updated
  //   componentDidMount(), componentDidUpdated(), componentWillUnmount()
  return (
    <Fragment>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      {name} has Clicked {count} times
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Fragment>
  );
}

export default Counter;
