import { lazy } from "react";

export const AboutAsync = lazy(() =>
  import("./about").then((module) => ({ default: module.About }))
);
