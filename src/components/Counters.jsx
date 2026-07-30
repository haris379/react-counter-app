import React, { useState } from "react";
import CounterComp from "./CounterComp";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  return (
    <>
      <div>
        {counters.map((counter) => (
          <CounterComp key={counter.id} />
        ))}
      </div>
    </>
  );
};

export default Counters;
