import { About } from "pages/about";
import { Home } from "pages/home";
import { RouteProps } from "react-router-dom";

export enum Routes {
  MAIN = "MAIN",
  ABOUT = "ABOUT",
}

export const routerPaths: Record<Routes, string> = {
  [Routes.MAIN]: "/",
  [Routes.ABOUT]: "/about",
};

export const routerConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: routerPaths[Routes.MAIN],
    element: <Home />,
  },
  [Routes.ABOUT]: {
    path: routerPaths[Routes.ABOUT],
    element: <About />,
  },
};
