import { Outlet } from "react-router-dom"
import FilterProduct from "./FilterProduct"


const Shop = () => {
  return (
   <section className=" px-2 pt-5 md:pt-16 md:px-12  min-h-svh font-montserrat">
    <div>
        <FilterProduct />
        <Outlet />
    </div>



   </section>
  )
}

export default Shop