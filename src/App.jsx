import React from "react";
import CounterComp from "./components/CounterComp";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
};

export default App;
