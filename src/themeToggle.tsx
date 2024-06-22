import React, { useContext } from 'react';
import { ThemeContext } from './useContextHook';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.body, color: theme.text }}>
      Current theme: {theme.body === lightTheme.body ? 'Light' : 'Dark'}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
