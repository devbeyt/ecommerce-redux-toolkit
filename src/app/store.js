import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/pages/cart/cartSlice";
import favoritesReducer from "../features/pages/favorite/favoritesSlice";
import productsReducer from "../features/pages/product/productsSlice";
import { apiSlice } from "../services/apiSlice";


const store = configureStore({
    reducer: {
        products: productsReducer,
        cart:cartReducer,
        favorites:favoritesReducer,

        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;