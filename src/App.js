import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
  });
  console.log(
    `loading: ${loading}\n error: ${error}\n data: ${JSON.stringify(data)}`
  );
  return (
    <div className="App" style={{ height: "1000vh " }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

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

/*
reference는 component의 한 부분을 선택 할 수 있는 방법
react의 모든 component는 reference element를 가지고 있음
reference value.focus()시 getElementbyID와 비슷한 효과 <-해당 element로 이동
useEffect는 Unmount시에도 동작한다.->이때 eventlistner를 지워 줘야함
return시 function을 반환 해주는데 이때 정리할 component에 의해 호출되어야 한다.
deps에 빈 list를 안넣어놓으면 매 update시마다 eventlistener가 추가되므로 꼭 설정해야 함
*/

/*
!==는 !=보다 strict한 비교(변수 type 비교)
*/

/*
preventLeave save하지 않은채 벗어날때 경고 alert
usePreventLeave의 return값의 이름은 같아야함
protect button click시 window는 beforeunload event를 가지고 preventDefault()를 시행
chorme의 경우는 event.returnValue=""를 꼭 넣어줘야 함
beforeunload는 window가 닫히기 전에 function실행을 허락한다
*/

/*
mouse가 page를 벗어날때 alart
console.log(event)를 활용해 마우스의 좌표를 확인 한 후 위로 벗어날때만 alert하도록 설정
*/

/*
fullscreen은 호환성 문제 때문에 많은 if/else가 필요함
firefox->mozRequestFullScreen
opera->webkit
microsoft->ms
*/
