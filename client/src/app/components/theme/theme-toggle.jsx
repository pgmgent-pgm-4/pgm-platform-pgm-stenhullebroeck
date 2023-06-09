import React from 'react';
import { useThemeContext } from '../../context/theme.context';

const ThemeToggle = () => {
  const { isDarkMode, handleThemeChange } = useThemeContext();

  return (
    <button
      onClick={() => handleThemeChange(!isDarkMode)}
      type="button"
      className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
    >
      {isDarkMode ? 'Dark theme' : 'Light theme'}
    </button>
  );
};

export default ThemeToggle;
