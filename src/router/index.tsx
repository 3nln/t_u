import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

export const pages = import.meta.glob("../app/**/*.tsx");

const NotFound = lazy(() => import("../app/not-found.tsx"));
const ErrorPage = lazy(() => import("../app/error.tsx"));

function generateRoutes(): RouteObject[] {
  const routes = Object.keys(pages).map((path) => {
    let routePath = path
      .replace("../app", "")
      .replace(/page\.tsx$/, "")
      .replace(/\.tsx$/, "")
      .replace(/\[\.{3,}([^\]]+)\]/g, "*")
      .replace(/\[([^\]]+)\]/g, ":$1");

    const Component = lazy(pages[path] as any);

    return {
      path: routePath || "/",
      element: <Component />,
    };
  });

  routes.push({ path: "*", element: <NotFound /> });
  routes.push({ path: "/error", element: <ErrorPage /> });

  return routes;
}

export default generateRoutes;
