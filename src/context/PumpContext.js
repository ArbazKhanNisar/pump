"use client";
import { createContext, useContext, useState } from "react";

const PumpContext = createContext();

export function PumpProvider({ children }) {
  const [relatedPumps, setRelatedPumps] = useState([]);

  const updateRelatedPumps = (allPumps, currentPumpId) => {
    // Filter out the current pump
    const others = allPumps.filter((p) => p.id !== currentPumpId);

    // Pick 3 random ones
    const randomThree = others
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    setRelatedPumps(randomThree);
  };

  return (
    <PumpContext.Provider value={{ relatedPumps, updateRelatedPumps }}>
      {children}
    </PumpContext.Provider>
  );
}

export const usePumpContext = () => useContext(PumpContext);
