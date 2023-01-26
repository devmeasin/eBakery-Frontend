import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import { Cart_Holder } from 'components/Carts';

const cart = () => {

    // use Extra code for hybernate error in cart page
    const [domLoaded, setDomLoaded] = useState(false);

    const ProductInCarts = useSelector((state) => state.cartItems.carts);

    useEffect(() => {
        setDomLoaded(true);
    }, [ProductInCarts]);

    return (
        <Layout sticky_cart={false} loader={!domLoaded}>
            {/* <div>
                <Toaster position="top-right" reverseOrder={false} />
                <h3>Cart Pages</h3>
                
                
            </div> */}
            <div>
                {domLoaded && <Cart_Holder products={ProductInCarts} />}
            </div>
        </Layout>
    )
}

export default cart;
