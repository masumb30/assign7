// context/ThemeContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Create context and custom hook
const DataContext = createContext();
export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [checkIns, setCheckIns] = useState([]);
  const addCheckIn = (checkIn) => {
    setCheckIns([...checkIns, checkIn]);
  };
  return (
    <DataContext.Provider value={{ checkIns, addCheckIn }}>
      {children}
    </DataContext.Provider>
  );
}
