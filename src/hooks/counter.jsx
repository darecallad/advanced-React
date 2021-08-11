import React from "react";
import { Fragment, useState } from "react";
function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
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
