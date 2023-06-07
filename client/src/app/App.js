import React from 'react';
import { useThemeContext } from './context/theme.context';

import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from './context';

import './App.scss';

function App() {
  const { isDarkMode, handleThemeChange } = useThemeContext();

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Outlet />
    </div>
  );
}

export default App;
