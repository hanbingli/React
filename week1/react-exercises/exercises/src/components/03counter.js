import React, { useState } from 'react';

function Counter() {
  // 声明一个叫 “count” 的 state 变量。
//   Inside <Counter> define a state variable called count (initialized with value 0) and state handler called setCount
  const [count, setCount] = useState(0);

  const feedback = count >10 ?  "It's higher than 10!" : "Keep counting..."

  return (
    <div>
      <p> {feedback} </p>
      <button onClick={() => setCount(count + 1)}>
        Add1!
      </button>
    </div>
  );
}



export default Counter;