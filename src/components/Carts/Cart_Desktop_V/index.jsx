import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, Center, Image, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IconX } from '@tabler/icons';
import { useDispatch } from 'react-redux';
import { removeItemToCart } from 'store/cartSlice';
import { Cart_Checkout } from '../Cart_Checkout';
import { Cart_Mobile_V } from '../Cart_Mobile_V';
import { CartCounter } from 'components/Product/AddToCart/cart-counter';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

export const Cart_Desktop_V = ({ products }) => {


    const dispatch = useDispatch();
    const matches = useMediaQuery('(max-width: 766px)');

    const { classes, cx } = useStyles();

    const removeItemToCartHandler = (productId) => {
        dispatch(removeItemToCart(productId));
    }

    const productsKey = Object.keys(products);


    return (

        <div>
            {
                !matches ?

                    <Grid>
                        <Grid.Col md={7} lg={9}>
                            <ScrollArea style={{ height: '350px' }}>
                                <div>
                                    <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>
                                                    <div style={{ marginLeft: '100px' }}>
                                                        <Text size="md" weight={700}>Product </Text>
                                                    </div>
                                                </th>
                                                <th><Center><Text size="md" weight={700}> Multi </Text> </Center></th>
                                                <th><Center><Text size="md" weight={700}> Subtotal </Text> </Center></th>
                                                <th><Center><Text size="md" weight={700}> Quantity </Text> </Center></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                productsKey.map((ProductId, ind) => (
                                                    <tr key={ind} >
                                                        <td onClick={() => removeItemToCartHandler(ProductId)} style={{ cursor: 'pointer' }}>
                                                            <IconX size={20} stroke={4} color="red" />
                                                        </td>
                                                        <td>
                                                            <Group spacing="sm">
                                                                {
                                                                    products[ProductId]?.product_image ?
                                                                        <LazyLoadImage
                                                                            style={{ borderRadius: '20px' }}
                                                                            width="100px"
                                                                            height="100px"
                                                                            object-fit="cover"
                                                                            radius='md'
                                                                            src={products[ProductId]?.product_image}
                                                                            effect="blur"
                                                                        />
                                                                        :
                                                                        <Image
                                                                            width='100px'
                                                                            height={100}
                                                                            radius='md'
                                                                            withPlaceholder
                                                                        />
                                                                }


                                                                <Text size="sm" weight={700}>
                                                                    {products[ProductId]?.title}
                                                                </Text>
                                                            </Group>
                                                        </td>
                                                        <td>
                                                            <Center>
                                                                <Text size="sm" weight={700}>
                                                                    {
                                                                        `${products[ProductId]?.price} x ${products[ProductId]?.quantity}`
                                                                    }
                                                                </Text>
                                                            </Center>
                                                        </td>
                                                        <td>
                                                            <Center>
                                                                <Text size="sm" weight={700}>
                                                                    {products[ProductId]?.price * products[ProductId]?.quantity}
                                                                </Text>
                                                            </Center>
                                                        </td>
                                                        <td style={{ width: 140 }}>
                                                            <Center>
                                                                <CartCounter product={products[ProductId]} />
                                                            </Center>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>

                                </div>

                            </ScrollArea>
                        </Grid.Col>

                        <Grid.Col md={5} lg={3}>
                            <Cart_Checkout />
                        </Grid.Col>

                    </Grid>

                    :
                    <Cart_Mobile_V products={products} />
            }

        </div>
    );
}