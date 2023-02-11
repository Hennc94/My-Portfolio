import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import About from "./routes/About";
import Resume from "./routes/Resume";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      
    ]
  }
])

const rootElement= document.getElementById("root")
const root = createRoot(rootElement)
  
  root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)




