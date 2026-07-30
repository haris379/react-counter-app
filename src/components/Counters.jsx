import React, { useState } from "react";
import CounterComp from "./CounterComp";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 3 },
    { id: 4, value: 0 },
  ]);
  return (
    <>
      <div>
        {counters.map((counter) => (
          <CounterComp key={counter.id} value={counter.value} />
        ))}
      </div>
    </>
  );
};

export default Counters;
