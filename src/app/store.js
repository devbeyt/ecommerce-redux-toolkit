import cartReducer from "../features/pages/cart/cartSlice";
import favoritesReducer from "../features/pages/favorite/favoritesSlice";
import productsReducer from "../features/pages/product/productsSlice";
import { apiSlice } from "../services/apiSlice";
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';





const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel1,
  };


const reducers = combineReducers({
    products: productsReducer,
        cart:cartReducer,
        favorites:favoritesReducer,

        [apiSlice.reducerPath]: apiSlice.reducer
  });

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});



export const persistor = persistStore(store);
export default store;