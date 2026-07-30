import React from "react";

const CounterComp = ({ counter, onDelete, onIncrement }) => {
  function getBadgeClass() {
    let classes = "badge m-2 text-bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  return (
    <div>
      <span className={getBadgeClass()}>{formatCount()}</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => onIncrement(counter)}
      >
        Increment
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(counter.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default CounterComp;
