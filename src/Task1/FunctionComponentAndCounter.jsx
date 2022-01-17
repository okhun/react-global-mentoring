import { useState } from "react";
const FunctionComponentCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            let temp = count + 1;
            setCount(temp);
          }}
        >
          Increment
        </button>
        <p>{count}</p>
        <button
          onClick={() => {
            let temp = count - 1;
            setCount(temp);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default FunctionComponentCounter;
