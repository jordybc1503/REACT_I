function CartCard() {
    return (
        <article className="bg-[#f2f2f2] rounded-[5px]  p-[10px] m-2.5 min-h-[220px] w-full break-words justify-between items-center flex flex-col flex-wrap
        md:h-[220px] md:w-[680px] md:flex-row">
            <img
                className="w-1/5 rounded-md"
                src="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
                alt="ipad"
            />
            <div className="flex flex-col justify-between gap-0.5 w-full h-25 pl-2
            md:w-3/5
            ">
                <strong className="font-bold w-full">iPad Pro 13</strong>
                <span className="w-full whitespace-nowrap overflow-hidden overflow-ellipsis">- Silver</span>
                <p className="w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
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
                    className="w-[60px] h-[30px] rounded-md border border-gray-200 p-1"
                    type="number"
                    name="quantity"
                    defaultValue="1"
                    min="1"
                    id="P7Q8R90"
                />
            </div>
            <strong className="w-full text-right md:w-1/5">AR$ 800000</strong>
        </article>
    );
}

export default CartCard;
