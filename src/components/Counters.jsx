import React, { useState } from "react";
import CounterComp from "./CounterComp";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };
  return (
    <>
      <div>
        {counters.map((counter) => (
          <CounterComp
            key={counter.id}
            onDelete={handleDelete}
            counter={counter}
          />
        ))}
      </div>
    </>
  );
};

export default Counters;
