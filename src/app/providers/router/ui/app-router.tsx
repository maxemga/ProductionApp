import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/router/config";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route element={element} path={path} />
      ))}
    </Routes>
  );
};
