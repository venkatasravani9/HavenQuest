import React, { createContext, useState } from "react";

// 1️⃣ Create the context
export const AppContext = createContext();

// 2️⃣ Create provider
export function AppProvider({ children }) {
  const [user, setUser] = useState("Traveler");
  const [theme, setTheme] = useState("light");

  // Toggle function for theme switching
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "dark"); // you can fix the logic later if needed
  };

  return (
    <AppContext.Provider value={{ user, setUser, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}
