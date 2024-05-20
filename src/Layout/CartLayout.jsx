import { Outlet } from "react-router-dom"
 import Header from "../components/Header"

 

const CartLayout = () => {
  return (
    <>
    <Header />
    
    <Outlet />

   
    </>
  
  )
}

export default CartLayout