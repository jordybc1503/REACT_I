
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartResume from "../components/CartResume";
import CartCard from "../components/CartCard";
import { useState, useEffect } from "react";

function Cart() {

  const [productsOnCart, setProductsOnCart] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart"));

      setProductsOnCart(products);
    }

  }, [])

  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="w-full flex justify-center  p-5 flex-row flex-wrap items-start">
        <div className="w-full">

        
        {
          productsOnCart.map((each) => (
            <CartCard
            key={each.id} product={each}
            ></CartCard>
          ))
        }
        </div>

        <CartResume total="$ 80000"></CartResume>


      </main>
      <Footer />
    </>
  );
}

export default Cart;
