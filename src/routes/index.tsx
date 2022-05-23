import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import LayoutLandingPage from "Layout/landingPage";
import NotFound from "components/notFound";
import LandingPage from "pages/landingPage";

const Login = lazy(() => import("pages/auth/login"));
const Register = lazy(() => import("pages/auth/register"));

const routes: RouteObject[] = [
  {
    element: <LayoutLandingPage />,
    path: "/",
    children: [
      {
        element: (
          <PrivateRoute>
            <LandingPage />
          </PrivateRoute>
        ),
        index: true
      }
    ]
  },
  {
    element: <Login />,
    path: "/login"
  },
  {
    element: <Register />,
    path: "/register"
  },
  {
    element: <NotFound />,
    path: "*"
  }
];

export default routes;
