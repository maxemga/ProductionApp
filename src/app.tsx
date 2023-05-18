import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutAsync } from "./components/about/about.async";
import { HomeAsync } from "./components/home/home.async";
import { classNames } from "./helpers/class-names";
import { useTheme } from "./providers/theme/useTheme";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeAsync />} />
          <Route path="/contact" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
