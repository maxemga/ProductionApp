import { ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "../lib/context";

interface Props {
  children: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
