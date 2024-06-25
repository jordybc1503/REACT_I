function CartCard({title, photo, description, price, quantity, color}) {
    return (
        <article className="bg-[#f2f2f2] rounded-[5px]  p-[10px] m-2.5 min-h-[220px] w-full break-words justify-between items-center flex flex-col flex-wrap
        md:h-[220px] md:w-[680px] md:flex-row">
            <img
                className="w-1/5 rounded-md"
                src={photo}
                alt={title}
            />
            <div className="flex flex-col justify-between gap-0.5 w-full h-25 pl-2
            md:w-3/5
            ">
                <strong className="font-bold w-full">{title}</strong>
                <span className="w-full whitespace-nowrap overflow-hidden overflow-ellipsis">{color}</span>
                <p className="w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                   {description}
                </p>
                <input
                    className="w-[60px] h-[30px] rounded-md border border-gray-200 p-1"
                    type="number"
                    name="quantity"
                    defaultValue={quantity}
                    min="1"
                    id="P7Q8R90"
                />
            </div>
            <strong className="w-full text-right md:w-1/5">{price}</strong>
        </article>
    );
}

export default CartCard;
