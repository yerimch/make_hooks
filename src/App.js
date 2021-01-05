import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
line 18 value={name.value}의 이해
line 14의 name은 useInput의 return으로 value를 가지므로 name.value로 사용가능
{..name}으로 대체 가능
value={name.value} onChange={name.onChange}를 {..name} 하나로 전부 대체할수있음
const name의 모든 값을 unpack해줌
*/
