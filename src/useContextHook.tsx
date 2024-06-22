import React, { createContext, useState } from 'react';

// Define your themes here
const lightTheme = {
  body: '#FFF',
  text: '#000',
};

const darkTheme = {
  body: '#333',
  text: '#DDD',
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // State to keep track of the current theme
  const [theme, setTheme] = useState(lightTheme);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    if (theme.body === lightTheme.body) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
