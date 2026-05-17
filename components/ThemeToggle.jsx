'use client';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme, availableThemes } = useTheme();

  const formatThemeName = (name) => {
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="p-2 text-sm rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 z-50 cursor-pointer"
      aria-label="Select Theme"
    >
      {availableThemes?.map((t) => (
        <option key={t} value={t}>
          {formatThemeName(t)}
        </option>
      ))}
    </select>
  );
}
