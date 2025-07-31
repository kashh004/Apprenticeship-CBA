import React, { useState } from 'react';
 
const Counter = () => {
    const [count, setCount] = useState(0);
 
  return (
    <div>
      <h1>Counter: {count}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
 
    </div>
  );
}
export default Counter;
 