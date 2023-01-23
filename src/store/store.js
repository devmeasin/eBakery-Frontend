import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import auth from './isAuth';
import cartSlice from 'store/cartSlice';
import favoriteItemSlice from 'store/favoriteItemSlice';
import productSlice from 'store/productSlice';
import { productsApi } from 'store/services/productsApi';
import { categoriesApi } from 'store/services/categoriesApi';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        productsItem: productSlice,
        cartItems: cartSlice,
        favorite_items: favoriteItemSlice,
    },

    middleware: (gDM) => gDM().concat(productsApi.middleware),
});

setupListeners(store.dispatch);