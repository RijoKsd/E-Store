import Header from "../components/Header";
import Hero from "../components/Hero";
import AllProduct from "../pages/Shop/AllProduct";
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
        children: [
          {
            index: true,
            element: <AllProduct />,
          },
          {
            path: "/shop/:id",
            element: <AllProduct />,
          },
        ],
      },
    ],
  },
];

export default routes;
