import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/router/config";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
          path={path}
        />
      ))}
    </Routes>
  );
};
