import { Login } from "../pages/auth";
import { Home } from "../pages/dashboard";
import { webPageNavigationType } from "../types/types";
import {
  authNavigationRouteNames,
  dashboardNavigationRouteNames,
} from "./navigation-names";

export const webPages: webPageNavigationType = [
  {
    path: authNavigationRouteNames.LOGIN,
    element: Login,
  },
  {
    path: dashboardNavigationRouteNames.DASH_BOARD,
    element: Home,
  },
];
