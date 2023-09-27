import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import DataTable from "./cryptov2";
import Portfolio from "./portfolio";
import Suggestion from "./input";


const ReactRouter = () => {
     
  const router = createBrowserRouter([
        {
          path: "/cryptov2",
          element: <DataTable/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/",
          element: <Signup/>,
        },
        {
          path: "/portfolio",
          element: <Portfolio/>,
        },
        {
          path: "/input",
          element: <Suggestion/>,
        },
      ]);
      

    return <RouterProvider router={router} />
}

export default ReactRouter;