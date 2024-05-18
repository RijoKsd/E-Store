import Header from "../components/Header";
import Hero from "../components/Hero";
import ShowProducts from "../pages/Shop/ShowProducts";
import Shop from "../pages/Shop/Shop";
import Cart from "../components/Cart";
 
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
            element: <ShowProducts />,
          },
          {
            path: "/shop/:id",
            element: <ShowProducts />,
            
          },
          // {
          //   path: "/shop/:id/:item",
          //   element: <Popup />,
          // }
        ],
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ],
  },
];

export default routes;
