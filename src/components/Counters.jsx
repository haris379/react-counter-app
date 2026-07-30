import React, { useState } from "react";
import CounterComp from "./CounterComp";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    const updatedCounters = [...counters];
    const index = updatedCounters.indexOf(counter);
    updatedCounters[index] = { ...counter };
    updatedCounters[index].value++;
    setCounters(updatedCounters);
  };

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  const handleReset = () => {
    const resetCount = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(resetCount);
  };
  return (
    <>
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <CounterComp
            key={counter.id}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    </>
  );
};

export default Counters;
