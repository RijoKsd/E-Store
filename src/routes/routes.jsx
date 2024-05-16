import Header from "../components/Header";
import Hero from "../components/Hero";
import Shop from "../pages/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
