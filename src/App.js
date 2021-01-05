import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const sayHello = () => {
    console.log("hello");
  };
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(() => {
    sayHello();
  }, [number]);
  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
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

/*
hooks와는 별 관계 없지만 validator를 사용해 input시 조건을 걸어줌
*/

/*
useState의 첫번째는 state를 초기화 시켜주고 두번째는 첫번째 아이템을 변경
useEffect는 componentWillUnmount, componetDidMount, componentWillUpdate와 동일한 function
따라서 mount, update시마다 매번 실행시켜줌
useEffect의 인자는 두개 있음
첫번째 인자는 function으로서의 effect -> useEffect(sayHello)만 넣어도 실행 ok
두번째 인자는 dependency -> 존재한다면 dependency list에 있는 값일 때만 값이 변하도록 활성화
list에 있는 값이 선언 되고 나서 effect함수를 사용해야 적용된다!!!
만약 빈 list를 전달하면 only mount, unmount시에만 실행
return시 componentWillUnmount 함수를 return한다.
*/
