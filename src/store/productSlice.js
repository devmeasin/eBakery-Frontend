import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    pagination: {
        page: 1,
        pageCount: 2,
    },
}

export const productSlice = createSlice({
    name: 'productsItem',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            const data = action.payload || [];
            state.products = [...state.products, ...data];
        },
        setPagination: (state, action) => {
            state.pagination = { ...state.pagination, ...action.payload };
        }

    },
})

// Action creators are generated for each case reducer function
export const { setProduct, setPagination } = productSlice.actions;

export default productSlice.reducer;