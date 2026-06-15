import React from "react";
import Navbar from "./assets/components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Help from "./assets/components/Help";
import Layout from "./Layout";
import { Navigate } from "react-router-dom";
import AboutExtend from "./assets/components/AboutExtend";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/about",
          element: <About />,
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },

        {
          path: "/about/:id",
          element: <AboutExtend />,
        },

        {
          path: "/contact",
          element: <Navigate to="/" replace />,
        },

        {
          path: "/help",
          element: <Help />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />

      {/* <Navbar /> */}
    </div>
  );
};

export default App;
