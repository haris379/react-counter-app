import React, { useState } from "react";

const CounterComp = () => {
  const [count, setCount] = useState(0);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };
  return (
    <>
      <span className={getBadgeClass(count)}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
    </>
  );
};

export default CounterComp;

function getBadgeClass(count) {
  let classes = "badge m-2 text-bg-";
  classes += count === 0 ? "warning" : "primary";
  return classes;
}
