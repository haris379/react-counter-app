import React, { useState } from "react";
import CounterComp from "./components/CounterComp";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
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
      <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          onIncrement={handleIncrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </>
  );
};

export default App;
