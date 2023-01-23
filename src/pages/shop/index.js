import React, { useState, useEffect, useRef } from 'react';
import Layout from 'components/Layout/Layout';
import { useGetProductsDataQuery } from 'store/services/productsApi';
import { Product } from 'components/Product';
import { Grid } from '@mantine/core';
import qs from 'qs';
import { product_dtos } from 'utils/helpers/product_dtos';
import { Toaster } from 'react-hot-toast';
import { LoadMore } from 'components/UI/Button/LoadMore';
import { ProductLoader } from 'components/UI/Loader/ProductLoader';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct, setPagination } from 'store/productSlice';

const shops = () => {

    const bottomEndRef = useRef(null);
    const ProductItems = useSelector((state) => state.productsItem.products);
    const pagination = useSelector((state) => state.productsItem.pagination);
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const options = {
        // sort: ['id:desc'],
        pagination: {
            page: pagination?.page,
            pageSize: 16
        },
        populate: '*'
    };

    const queryString = qs.stringify(options);
    const { data: productsData, isLoading, isError, status } = useGetProductsDataQuery(queryString);

    // handle the pagination
    const handlePaginate = () => {
        if (pagination?.page < pagination?.pageCount) {
            dispatch(setPagination({ page: pagination?.page + 1 }));

        }
    }

    // product dtos
    const products_dtos = product_dtos(productsData?.data); // productsData?.data;

    useEffect(() => {
        if (pagination?.page <= pagination?.pageCount) {
            dispatch(setProduct(products_dtos));
            dispatch(setPagination(productsData?.meta?.pagination));
        }

    }, [productsData]);

    useEffect(() => {
        bottomEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [pagination]);


    return (
        <Layout loader={isLoading}>
            <div><Toaster position="top-right" reverseOrder={false} /></div>
            <h3>Shop Pages</h3>
            <Grid gutter="xs">
                {
                    ProductItems?.map((product, ind) => (
                        <Grid.Col sm={6} md={4} lg={3} key={ind}> <Product product={product} /> </Grid.Col>
                    ))
                }
            </Grid>
            {
                status === 'pending' && <ProductLoader />
            }
            {
                pagination?.page < pagination?.pageCount && <LoadMore meta={pagination} handlePaginate={handlePaginate} loader={status === 'pending'} />
            }
            <div ref={bottomEndRef} />
        </Layout>
    )
}


// export const getServerSideProps = async ({ query }) => {
//     // Product
//     const options = {
//         sort: ['id:desc'],
//         pagination: {
//             page: query.page ? +query.page : 1,
//         },
//         populate: '*'
//     };

//     // if (query.search) {
//     //     options.filters = {
//     //         Title: {
//     //             $containsi: query.search,
//     //         },
//     //     };
//     // }

//     // const queryString = qs.stringify(options);

//     // const { data: articles } = await fetchArticles(queryString);
//     // const { data: products, isLoading, isError, status } = useGetProductsDataQuery();

//     return {
//         props: {
//             // product: {
//             //     items: products?.data,
//             //     pagination: products?.meta.pagination,
//             // },
//             // isLoading,
//         },
//     };
// };


export default shops;
