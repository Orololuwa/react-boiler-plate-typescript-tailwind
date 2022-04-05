import { RouteObject } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import LayoutHome from "Layout/home";
import Home from "pages/home";

const routes: RouteObject[] = [
  {
    element: <LayoutHome />,
    path: "/",
    children: [
      {
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
        index: true
      }
    ]
  },
  {
    element: <div>404 | Not Found!</div>,
    path: "*"
  }
];

export default routes;
