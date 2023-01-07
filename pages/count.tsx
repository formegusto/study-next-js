import React from "react";

function Counter() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default Counter;
