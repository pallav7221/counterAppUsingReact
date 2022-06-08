import React from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);
  const Handlechange = (value) => {
    setCounter(counter + value);

  }
  let styles;
  if (counter % 2 === 0) {
    styles = { color: "green" }
  }
  else {
    styles = { color: "red" };
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2 style={styles}>{counter}</h2>
      <button onClick={() => Handlechange(1)}>increase</button>
      <button onClick={() => Handlechange(-1)}>decrease</button>
      <button onClick={() => Handlechange(2)}>double</button>
       
    </div>
  );
}

export default App;
