import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Page/Login";
import Home from "./Page/Home";
import NotFound from "./components/NotFound";
import Contact from "./Page/Contact";
import About from "./Page/About";
import Service from "./Page/Service";
// import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Beranda",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/Service",
    element: <Service />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
