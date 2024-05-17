import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import Popup from "./components/Popup";
export default function App() {

  const router = createBrowserRouter(routes)
  return (
    // <RouterProvider router = {router} />
    <Popup /> 
  
  );
}
 