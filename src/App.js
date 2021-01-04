import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

/*
  class Appugly extends React.Component{
  state={
    cnt:1
  };
  incrementItem =()=>{
    this.setState({cnt:this.state.cnt+1});
  }
  decrementItem=()=>{
    this.setState({cnt:this.state.cnt-1});
  }
  render(){
    return(
      <div>
      <h1>{this.state.cnt}</h1>
      <button onClick={this.incrementItem}>Increment</button>
      <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  };
}
*/

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
