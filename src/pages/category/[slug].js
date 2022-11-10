import React from 'react';
import qs from 'qs';
import { useRouter } from 'next/router';
import Layout from 'components/Layout/Layout';
import { Product } from 'components/Product';
import { Grid } from '@mantine/core';
import { product_dtos } from 'utils/helpers/product_dtos';
import { useGetProductByCategoryQuery } from 'store/services/categoriesApi';

const categoryByProduct = () => {
    const router = useRouter()
    // const { data, isLoading, isError, status } = useGetProductsDataQuery();
    const { slug } = router.query;

    const options = {
        populate: '*',
        sort: ['id:desc'],
        filters: {
            category: {
                slug: slug,
            },
        },
        // pagination: {
        //     page: query.page ? +query.page : 1,
        //     pageSize: 1,
        // },
    };

    const queryString = qs.stringify(options);

    const { data, isLoading, isError, status } = useGetProductByCategoryQuery(queryString);
    const products = product_dtos(data);

    console.log(data);

    return (
        <Layout>
            <h3>{slug}</h3>
            <div>
                <Grid gutter="xs">
                    {
                        products?.map((product, ind) => (
                            <Grid.Col sm={6} md={4} lg={3} key={ind}> <Product product={product} /> </Grid.Col>
                        ))
                    }
                </Grid>
            </div>
        </Layout>
    )
}

export default categoryByProduct;
