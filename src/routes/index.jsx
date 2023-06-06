import { HomePage, LoginPage } from "../pages";

const routers = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default routers;
