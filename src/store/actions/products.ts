import { createAction } from "@reduxjs/toolkit";

//objeto para accion de capturas texto
const captureText = createAction(
    "captureText",
    (obj)=> {return {payload: {text: obj.text}}
    }
)

const productsActions = {captureText} //objeto con todas las acciones
export default productsActions;