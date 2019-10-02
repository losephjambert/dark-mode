import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = bool => {
  // useDarkMode needs has two responsibilities
  // 1. set a user's darkmode preference
  //    a. the user's darkmode preference should persist between sessions
  // 2. apply that dark mode preference to the application

  // 1. set a user's darkmode preference
  const [darkMode, setDarkMode] = useLocalStorage('darkmode', bool); // useLocalStorage hook satisfies requirement 1a

  // 2. apply that dark mode preference to the application
  useEffect(() => {
    const body = document.body;
    darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
