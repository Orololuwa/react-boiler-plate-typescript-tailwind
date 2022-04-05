import { RouteObject } from "react-router-dom";

import LayoutHome from "Layout/home";
import Home from "pages/home";

const routes: RouteObject[] = [
  {
    element: <LayoutHome />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true
      }
    ]
  }
];

export default routes;
