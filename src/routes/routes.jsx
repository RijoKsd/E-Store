import HomeLayout from "../Layout/HomeLayout";
import CartLayout from "../Layout/CartLayout";
import ShopLayout from "../Layout/ShopLayout";
import Popup from "../components/Popup";
import PaymentForm from "../components/PaymentForm";
import Cart from "../components/Cart";
import PaymentSuccess from "../components/PaymentSuccess";    
import ErrorPage from "../components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cart",
    element: <CartLayout />,
     children: [
      {
        path: "",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <PaymentForm />,
      },
      {
        path: "success",
        element: <PaymentSuccess />,
      }
     
    ],
     
  },
  {
    path: "/shop",
    element: <ShopLayout />,
    children: [
      {
        path: ":id",
        element: <Popup />,
      },
    ],
  },
];

export default routes;
