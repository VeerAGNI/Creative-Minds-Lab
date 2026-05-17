'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const availableThemes = ['light', 'dark', 'creator-neon', 'creator-sunset'];

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => null,
  toggleTheme: () => null,
  availableThemes,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored && availableThemes.includes(stored)) {
      setThemeState(stored);
      applyTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark');
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  }, []);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.removeAttribute('data-theme');

    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else if (newTheme !== 'light') {
      root.setAttribute('data-theme', newTheme);
    } else {
      root.setAttribute('data-theme', 'light');
    }
  };

  const setTheme = (newTheme) => {
    if (!availableThemes.includes(newTheme)) return;
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'light', setTheme, toggleTheme, availableThemes }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
