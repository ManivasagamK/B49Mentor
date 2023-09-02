import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const Store = configureStore({
    reducer:{
        Product :ProductSlice,
    }
});

export default Store;