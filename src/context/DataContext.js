// context/ThemeContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Create context and custom hook
const DataContext = createContext();
export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(p => p === "light" ? "dark" : "light");

  return (
    <DataContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DataContext.Provider>
  );
}
