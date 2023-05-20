import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/theme";
import { classNames } from "shared";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  );
};
