import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { Cart_Holder } from 'components/Cart_Holder';

const cart = () => {

    const ProductInCarts = useSelector((state) => state.cartItems.carts);
    const has_products = Object.keys(ProductInCarts);

    return (
        <Layout>
            {/* <div>
                <Toaster position="top-right" reverseOrder={false} />
                <h3>Cart Pages</h3>
                
                
            </div> */}
            <div>
                <Cart_Holder products={ProductInCarts} />
            </div>
        </Layout>
    )
}

export default cart;
