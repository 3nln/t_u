// function to generate routes for a React application using React Router
// and dynamic imports. It scans the `../app` directory for all `.tsx` files,
// converts their paths into route paths, and lazily loads the components.
// It also includes a 404 Not Found page and an error page. The generated routes
// are then used in a React application with a `BrowserRouter` and `Suspense`
// for loading states. The `generateRoutes` function is exported for use in the
// main application file. The code uses TypeScript for type safety and
// better development experience.

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
