import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import generateRoutes from "./router";
import "./App.css"
import Loader from "./components/custom/Loader";

export default function App() {
  const routes = generateRoutes();
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={<>{element}</>} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
