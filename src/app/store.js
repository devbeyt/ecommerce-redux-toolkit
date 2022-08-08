import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/pages/cart/cartSlice";
import productsReducer from "../features/pages/product/productsSlice";
import { apiSlice } from "../services/apiSlice";


const store = configureStore({
    reducer: {
        products: productsReducer,
        cart:cartReducer,

        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;