import React, { useState } from "react";

const CounterComp = () => {
  const [count, setCount] = useState(0);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const tags = ["tag1", "tag2", "tag3"];
  return (
    <>
      <span className={getBadgeClass(count)}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment</button>
      <ul>
        {tags.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default CounterComp;

function getBadgeClass(count) {
  let classes = "badge m-2 text-bg-";
  classes += count === 0 ? "warning" : "primary";
  return classes;
}
