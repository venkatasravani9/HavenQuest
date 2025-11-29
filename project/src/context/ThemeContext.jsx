import React, { createContext, useState, useContext } from "react";

// Create the Context
const ThemeContext = createContext();

// Create Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };

  // Apply theme class to body
  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
