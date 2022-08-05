import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/components/category/categoriesSlice";
import productsReducer from "../features/pages/product/productsSlice";


const store = configureStore({
    reducer:{
        categories:categoriesReducer,
        products:productsReducer,
    }
})

export default store;