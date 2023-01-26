import { useState } from 'react';
import { Button, Drawer, useMantineTheme } from '@mantine/core';
import { Cart_Mobile_V } from 'components/Carts/Cart_Mobile_V';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { IconChecks } from '@tabler/icons';

export const Cart_Drawer = ({ opened, setOpened }) => {

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
                padding="md"
                size="lg"
                zIndex={9999999999}
            >
                <Cart_Mobile_V products={ProductInCarts} showCH_Area={false} CMHeight='80vh' />

                <div>
                    <Link href='/checkout' passHref>
                        <Button onClick={() => setOpened(!opened)} leftIcon={<IconChecks size={20} />} fullWidth variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius='lg' mt="md">
                            PROCEED TO CHECKOUT
                        </Button>
                    </Link>
                </div>
            </Drawer>
        </div>
    )
};