interface Props {
  total: number;
}


const CartResume = (props: Props) => {

  const {total} = props;
    return ( 
    <div className="w-[340px] flex-col bg-[#f2f2f2] rounded-[5px] p-[30px] m-2.5 h-[220px] break-words flex  justify-between">
        <div className="flex-grow flex flex-col justify-between">
          <h2 className="flex justify-between">
            <span>Resumen</span>
            <span>del</span>
            <span>pedido</span>
          </h2>
          <div className="flex justify-between items-center">
            <h3>Total</h3>
            <strong >{total}</strong>
          </div>
          <small className="pb-2.5">
            Incluye impuesto PAIS y percepción AFIP.
          </small>
        </div>
        <button className="w-full bg-[#ff3b3c] text-white font-bold border-none h-10 rounded-lg hover:bg-[ff5151]" id="buy" type="button">
          COMPRAR
        </button>
      </div> );
}
 
export default CartResume;