
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Cart() {
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="w-full flex justify-center items-center p-5">
        <article className="bg-[#f2f2f2] rounded-[5px] p-[30px] m-2.5 h-[220px] w-[680px] break-words flex  justify-between items-center">
          <img
            className="w-[680px] h-[100px] rounded-md"
            src="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
            alt="ipad"
          />
          <div className="flex flex-col justify-between gap-0.5 w-85 h-25">
            <strong className="font-bold">iPad Pro 13</strong>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">- Silver</span>
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
              The iPad Pro 13 is a stunning piece of technology, boasting a
              large 12.9-inch Retina display with ProMotion technology. With
              256GB of storage, this iPad provides ample space for all your
              files, apps, and multimedia content. The sleek and slim design,
              combined with the silver color, gives it a sophisticated look.
              Enjoy seamless connectivity with the WiFi feature. Capture your
              memorable moments with the high-quality camera and relive them on
              the impressive screen. Whether you're a professional artist,
              student, or just someone who appreciates cutting-edge technology,
              the iPad Pro 12.9 is a versatile device that meets all your needs.
            </p>
            <input
              className="w-18 h-10 rounded-md border border-gray-200 p-1"
              type="number"
              name="quantity"
              defaultValue="1"
              min="1"
              id="P7Q8R90"
            />
          </div>
          <strong className="w-25 text-right">AR$ $800000</strong>
        </article>
        <div className="w-[340px] flex-col bg-[#f2f2f2] rounded-[5px] p-[30px] m-2.5 h-[220px] break-words flex  justify-between">
          <div className="flex-grow flex flex-col justify-between">
            <h2 className="flex justify-between">
              <span>Resumen</span>
              <span>del</span>
              <span>pedido</span>
            </h2>
            <div className="flex justify-between items-center">
              <h3>Total</h3>
              <strong >$800000</strong>
            </div>
            <small className="pb-2.5">
              Incluye impuesto PAIS y percepción AFIP.
            </small>
          </div>
          <button className="w-full bg-[#ff3b3c] text-white font-bold border-none h-10 rounded-lg hover:bg-[ff5151]" id="buy" type="button">
            COMPRAR
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
