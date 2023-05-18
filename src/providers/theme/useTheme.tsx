import { useContext } from "react";
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "./context";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
  };

  return { theme, toggleTheme };
};
