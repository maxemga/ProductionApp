import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/theme";
import { classNames } from "shared";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <AppRouter />
      </Suspense>
    </div>
  );
};
