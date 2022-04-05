import { RouteObject } from "react-router-dom";

import Home from "pages/home";

const routes: RouteObject[] = [
  {
    element: <Home />,
    path: "/"
  }
];

export default routes;
