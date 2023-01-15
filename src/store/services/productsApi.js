import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { API_ENDPOINT } from 'config';


export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_ENDPOINT + '/api/',
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProductsData: builder.query({
            query: (queryString) => `products?${queryString}`,
            transformResponse: (res) => res,
            transformErrorResponse: (res) => res.status,
            providesTags: ['Product'],
        }),

        getSingleProductData: builder.query({
            query: (queryString) => `products?${queryString}`,
            transformResponse: (res) => res?.data,
            transformErrorResponse: (res) => res.status,
            providesTags: ['Product'],
        }),

    })
});


export const { useGetProductsDataQuery, useGetSingleProductDataQuery } = productsApi;