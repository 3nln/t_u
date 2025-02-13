import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import generateRoutes from "./router/Router";

export default function App() {
  const routes = generateRoutes();

  console.log(
    routes
  );
  

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={<>{element}</>} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
