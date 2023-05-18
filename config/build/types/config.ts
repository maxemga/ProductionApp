import { Configuration } from "webpack";

export interface BuildPaths {
  entry: string;
  html: string;
  build: string;
}

export interface BuildEnv {
  mode: Configuration["mode"];
  port: number;
}

export interface BuildOptions {
  mode: Configuration["mode"];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
