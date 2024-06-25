import { useState, useRef, useEffect } from "react";
import Product from "../interfaces/products";
import ProductProp from "../interfaces/ProductProp";

export default function Checkout(props: ProductProp) {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);
  const units = useRef(1);
  useEffect(() => {
    const productsOnCart = localStorage.getItem("cart");
    let products = [];
    if (productsOnCart) {
      products = JSON.parse(productsOnCart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = products?.find((item: Product) => item.id === product.id);
    if (one) {
      setQuantity(one.quantity);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
    }
  }, [product.id]);
  const manageCart = () => {
    const productsOnCart = localStorage.getItem("cart");
    let products = [];
    if (productsOnCart) {
      products = JSON.parse(productsOnCart);
    }
    const one = products?.find((each: Product) => each.id === product.id);
    if (!one) {
      product.units = Number(units.current.value);
      products.push(product);
      setButton(true);
    } else {
      products = products.filter((each: Product) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(products));
  };
  return (
    <section className="w-[340px] p-[10px] m-[10px] flex flex-col">
      <div className="bg-[#ebebeb] p-10 rounded-md">
        <span className="text-[#ff3b3c]">Total:</span>
        <h2 id="price" className="text-[28px] font-bold mt-[10px]">
          $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className="text-wrap leading-5 text-[12px]">
          Includes Country tax and AFIP collection
        </p>
        <ul className="p-0 list-none mb-[30px]">
          <li className="flex my-[15px]">
            <img src="/truck.png" alt="Truck" className="mr-[15px]" />
            <img src="/plane.png" alt="Plane" className="mr-[15px]" />
          </li>
          <li>
            <span className="text-wrap leading-5 text-[10px]">
              Add the product to the cart to know the shipping costs
            </span>
          </li>
        </ul>
        <div /* className="gap-y-[20px]" */>
          <div className="flex mb-[10px]">
            <input
              className="h-[40px] rounded-md border-0 w-[60px] mr-[10px] p-[5px] pl-[15px] box-border"
              type="number"
              min="1"
              value={quantity}
              ref={units}
              onChange={() => setQuantity(Number(units.current.value))}
            />
            <button
              type="button"
              className={
                button
                  ? "w-full bg-[#202020] hover:bg-[#404040] text-[14px] text-white font-bold border-0 h-[40px] rounded-md"
                  : "w-full bg-[#ff3b3c] hover:bg-[#ff5151] text-[14px] text-white font-bold border-0 h-[40px] rounded-md"
              }
              onClick={manageCart}
            >
              {button ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
