import { RouteObject } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import LayoutHome from "Layout/home";
import Home from "pages/home";
import NotFound from "components/notFound";

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
    element: <NotFound />,
    path: "*"
  }
];

export default routes;
