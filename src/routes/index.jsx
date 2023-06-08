import { HomePage, LoginPage, MoviePage, TVPage } from "../pages";

const routers = [
  {
    path: "/",
    element: <HomePage />,
    layout: true,
    access: "public",
  },
  {
    path: "/login",
    element: <LoginPage />,
    layout: false,
    access: "public",
  },
  {
    path: "/movie",
    element: <MoviePage />,
    layout: true,
    access: "member",
  },
  {
    path: "/tv",
    element: <TVPage />,
    layout: true,
    access: "member",
  },
];

export default routers;
