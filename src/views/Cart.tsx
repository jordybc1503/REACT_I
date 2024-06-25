
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
      <main className="w-full flex p-5 items-start justify-center flex-wrap">
        <div className="w-full md:w-[680px] mr-5">
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
