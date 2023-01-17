import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import { useGetProductsDataQuery } from 'store/services/productsApi';
import { Product } from 'components/Product';
import { Grid } from '@mantine/core';
import qs from 'qs';
import { product_dtos } from 'utils/helpers/product_dtos';
import { Toaster } from 'react-hot-toast';
import { LoadMore } from 'components/UI/Button/LoadMore';
import { ProductLoader } from 'components/UI/Loader/ProductLoader';

const shops = () => {

    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);

    const options = {
        // sort: ['id:desc'],
        pagination: {
            page: page,
        },
        populate: '*'
    };

    const queryString = qs.stringify(options);
    const { data: productsData, isLoading, isError, status } = useGetProductsDataQuery(queryString);

    const products_filter = product_dtos(productsData?.data);

    useEffect(() => {
        if (products_filter) {
            setProducts(prevState => {
                return [...prevState, ...products_filter]
            });
        }
    }, [productsData]);

    console.log(status)

    return (
        <Layout loader={isLoading}>
            <div><Toaster position="top-right" reverseOrder={false} /></div>
            <h3>Shop Pages</h3>
            <Grid gutter="xs">
                {
                    products?.map((product, ind) => (
                        <Grid.Col sm={6} md={4} lg={3} key={ind}> <Product product={product} /> </Grid.Col>
                    ))
                }
            </Grid>
            {
                status === 'pending' && <ProductLoader />
            }
            <LoadMore meta={productsData?.meta} setPage={setPage} loader={status !== 'pending'} />
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
