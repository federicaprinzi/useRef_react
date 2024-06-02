import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <h1>Counter:</h1>
      <Counter initialValue={0} />
    </div>
  );
};

export default App;
