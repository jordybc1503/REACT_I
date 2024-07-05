import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/products";

// variable para el almacenamiento de todas
const store = configureStore(
    {
        reducer: {
            products: productsReducer
        },
    }
);

export default store;

