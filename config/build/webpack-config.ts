import path from "path";
import type { Configuration } from "webpack";
import { buildDevServer } from "./dev-server";
import { buildLoaders } from "./loaders";
import { buildPlugins } from "./plugins";
import { buildResolvers } from "./resolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfiguration = (
  options: BuildOptions
): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
