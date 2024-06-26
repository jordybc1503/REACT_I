import { useRef } from "react";
import Product from "../interfaces/products";
import ProductProp from "../interfaces/ProductProp";

function CartCard(prop: ProductProp) {
    const {product} = prop; 
    const { id, title, images, description, price, quantity, colors } = product;
    const units = useRef();
    const manageUnits = () => {
        let productsOnCart = (productsOnCart = JSON.parse(localStorage.getItem("cart")));
        const one = productsOnCart.find((each: Product) => each.id === id);
        one.units = Number(units.current.value);
        localStorage.setItem("cart", JSON.stringify(productsOnCart));
    };

    return (
        <article className="bg-[#f2f2f2] rounded-[5px]  p-[10px] m-2.5 min-h-[220px] w-full break-words justify-between items-center flex flex-col flex-wrap
        md:h-[220px] md:w-[680px] md:flex-row">
            <img
                className="w-1/5 rounded-md"
                src={images[0]}
                alt={title}
            />
            <div className="flex flex-col justify-between gap-0.5 w-full h-25 pl-2
            md:w-3/5
            ">
                <strong className="font-bold w-full">{title}</strong>
                <span className="w-full whitespace-nowrap overflow-hidden overflow-ellipsis">{colors[0]}</span>
                <p className="w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {description}
                </p>
                <input
                    className="w-[60px] h-[30px] rounded-md border border-gray-200 p-1"
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                    ref={units}
                    onChange={manageUnits}
                    min="1"
                    id={id}
                />
            </div>
            <strong className="w-full text-right md:w-1/5">$ {price}</strong>
        </article>
    );
}

export default CartCard;
