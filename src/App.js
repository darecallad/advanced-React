import "./App.css";
import Movie from "./hoc/Movie";
import Counter from "./hooks/counter";
import User from "./hooks/user";

function App() {
  return (
    <div>
      <Movie />
      <Counter />
      <User />
    </div>
  );
}

export default App;
