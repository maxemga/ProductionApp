import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfiguration } from "./config/build/webpack-config";
import type { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 4000;

  const config: Configuration = buildWebpackConfiguration({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
