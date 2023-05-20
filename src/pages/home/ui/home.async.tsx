import { lazy } from "react";

export const HomeAsync = lazy(() =>
  import("./home").then((module) => ({ default: module.Home }))
);
