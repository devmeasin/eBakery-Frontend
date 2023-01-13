import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { Card, Image, Text, Badge, Button, Group, Title, InputBase, Divider } from '@mantine/core';
import { IconChecks } from '@tabler/icons';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from 'utils/calculateTotals';
// import { calculateTotals } from 'store/cartSlice';

export const Cart_Checkout = () => {

    const [total, setTotal] = useState(0);
    const [delivery, setDelivery] = useState(60);
    const products = useSelector((state) => state.cartItems.carts);


    useEffect(() => {
        if (products) {
            setTotal(calculateTotals(products));
        }
    }, [products]);


    // console.log('subtotal', subtotal)

    return (
        <Card shadow="sm" p="lg" radius="md" withBorder px="md" py="md">
            <Title order={4} weight={700}>CART TOTALS</Title>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Subtotal:</Text>
                <Badge color="pink" variant="light" size="lg">
                   {Number(total) + Number(delivery)} .00৳
                </Badge>
            </Group>
            <Divider my="sm" variant="dashed" />
            <Group position="apart" mt="lg" mb="lg">
                <Text weight={500}>Shipping:</Text>
                <InputBase radius="md" size="xs" defaultValue={60} component="select" onChange={(e) => setDelivery(e.target.value)} >
                    <option value="60" style={{ fontWeight: 700 }} > InSide of Dhaka </option>
                    <option value="150" style={{ fontWeight: 700 }} > OutSide of Dhaka </option>
                </InputBase>
            </Group>

            <Divider my="sm" variant="dashed" />
            <Link href='/checkout' passHref>
                <Button leftIcon={<IconChecks size={20} />} fullWidth variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius='lg' mt="md" disabled={Number(delivery) >= 60 ? false : true}>
                    PROCEED TO CHECKOUT
                </Button>
            </Link>

        </Card>
    );
};