import { createContext, ReactNode, useMemo, useState } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface Values {
  theme?: Theme;
  setTheme?: (value: Theme) => void;
}

export const ThemeContext = createContext<Values>({});

export const LOCAL_STORAGE_THEME = "theme";
