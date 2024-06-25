
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
        <CartCard
          title="Ipad"
          photo="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
          description="description of the product"
          price="90"
          quantity="1"
          color="black"
        ></CartCard>
        <CartResume total="$ 80000"></CartResume>


      </main>
      <Footer />
    </>
  );
}

export default Cart;
