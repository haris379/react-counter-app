import React, { useState } from "react";

const CounterComp = ({ value }) => {
  const [count, setCount] = useState(value);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const handleIncrement = () => {
    console.log("Increment");
    setCount(count + 1);
  };
  return (
    <div>
      <span className={getBadgeClass(count)}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default CounterComp;

function getBadgeClass(count) {
  let classes = "badge m-2 text-bg-";
  classes += count === 0 ? "warning" : "primary";
  return classes;
}
