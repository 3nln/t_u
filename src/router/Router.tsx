import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

export const pages = import.meta.glob("../app/pages/**/*.tsx");

function generateRoutes(): RouteObject[] {
    return Object.keys(pages).map((path) => {
        let routePath = path
            .replace("../app/pages", "")
            .replace(/page\.tsx$/, "")
            .replace(/\.tsx$/, "")
            .replace(/\[(.*?)\]/g, ":$1");
        const Component = lazy(pages[path] as any);

        return {
            path: routePath || "/",
            element: <Component />,
        };
    });
}

export default generateRoutes;