import { useState } from 'react';
import { Drawer, useMantineTheme } from '@mantine/core';
import { Cart_Mobile_V } from 'components/Carts/Cart_Mobile_V';
import { useSelector } from 'react-redux';

export const Cart_Drawer = ({opened , setOpened}) => {

    const ProductInCarts = useSelector((state) => state.cartItems.carts);
    const theme = useMantineTheme();


    return (
        <div>
            <Drawer
                opened={opened}
                onClose={() => setOpened(!opened)}
                title="Cart"
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                position="right"
                padding="xl"
                size="lg"
            >
                <Cart_Mobile_V products={ProductInCarts}/>
            </Drawer>
        </div>
    )
};