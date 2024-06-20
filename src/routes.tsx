import React, { lazy, Suspense } from "react";
import { Navigate, useRoutes, RouteObject } from "react-router-dom";

import LoadMonitor from "@/pages/loadMonitor";
import HistoricalProduction from "@/pages/historicalProduction";
const LazyElement = (Component: React.LazyExoticComponent<React.FC>) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const NotFound = lazy(() => import("@/pages/exception/403"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/loadMonitor" />,
  },
  {
    path: "/loadMonitor",
    element: <LoadMonitor />,
  },
  {
    path: "/historicalProduction",
    element: <HistoricalProduction />,
  },
  {
    path: "*",
    element: LazyElement(NotFound),
  },
];

const Routes = () => {
  return useRoutes(routes);
};

export default Routes;
