import React from "react";
import CounterComp from "./CounterComp";

const Counters = ({ onIncrement, onReset, onDelete, counters }) => {
  return (
    <>
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <CounterComp
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    </>
  );
};

export default Counters;
