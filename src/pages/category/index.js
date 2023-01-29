import { Grid } from '@mantine/core'
import { Categories } from 'components/Categories'
import Layout from 'components/Layout/Layout'
import { ProductLoader } from 'components/UI/Loader/ProductLoader'
import React from 'react'
import { useGetCategoryDataQuery } from 'store/services/categoriesApi'
import { categories_dtos } from 'utils/helpers/categories_dtos';

const category = () => {
    const { data, isLoading, isError, status } = useGetCategoryDataQuery();
    const categoriesData = categories_dtos(data);
    console.log(categoriesData);

    return (

        <Layout>
            <h3>Categoty</h3>
            <div>
                <Categories categoryType='grid' />
            </div>
            {/* {isLoading && <ProductLoader />} */}
        </Layout>

    )
}

export default category;