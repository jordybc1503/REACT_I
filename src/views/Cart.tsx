
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartResume from "../components/CartResume";
import CartCard from "../components/CartCard";

function Cart() {
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="w-full flex justify-center items-center p-5 flex-row flex-wrap">
        <CartCard></CartCard>
        <CartResume></CartResume>
        
        
      </main>
      <Footer />
    </>
  );
}

export default Cart;
