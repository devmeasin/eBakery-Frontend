import React from 'react';
import qs from 'qs';
import { useRouter } from 'next/router';
import Layout from 'components/Layout/Layout';
import { Product } from 'components/Product';
import { Grid } from '@mantine/core';
import { product_dtos } from 'utils/helpers/product_dtos';
import { useGetProductByCategoryQuery } from 'store/services/categoriesApi';
import { ProductLoader } from 'components/UI/Loader/ProductLoader';

const categoryByProduct = () => {

    const router = useRouter();
    const { slug } = router.query;

    const queryString = qs.stringify({
        populate: '*',
        sort: ['id:desc'],
        filters: {
            category: {
                slug: slug,
            },
        },
    });

    const { data, isLoading, isError, status } = useGetProductByCategoryQuery(queryString);
    const products = product_dtos(data);


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
            {isLoading && <ProductLoader />}
        </Layout>
    )
}

export default categoryByProduct;
