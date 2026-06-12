import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home.jsx";
import Products from "./assets/components/Products.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import SingleProduct from "./assets/components/SingleProduct.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />,
);
