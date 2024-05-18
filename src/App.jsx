import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import Cart from "./components/Cart";
export default function App() {
  const router = createBrowserRouter(routes);
  // return <RouterProvider router={router} />; 
  return <Cart />
}
