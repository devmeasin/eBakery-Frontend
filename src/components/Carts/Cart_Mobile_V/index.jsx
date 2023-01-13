import React from 'react';
import { useStyles } from './product_cart.style';
import { ScrollArea, Group, Image, Text } from '@mantine/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { removeItemToCart } from 'store/cartSlice';
import { IconX } from '@tabler/icons';
import { CartCounter } from 'components/Product/AddToCart/cart-counter';
import { Cart_Checkout } from '../Cart_Checkout';

export const Cart_Mobile_V = ({ products }) => {

    const Products_Key = Object.keys(products);
    const { classes } = useStyles();
    const dispatch = useDispatch();

    const removeItemToCartHandler = (productId) => {
        dispatch(removeItemToCart(productId));
    }


    return (
        <div>
            <ScrollArea style={{ height: '400px' }}>
                {
                    products && Products_Key.map((product_Id) => (
                        <div key={product_Id} className={classes.cart_area_wrapper}>

                            <div className={classes.image_wrapper}>

                                {
                                    products[product_Id]?.product_image ?
                                        <LazyLoadImage
                                            style={{ borderRadius: '20px' }}
                                            width="80px"
                                            height="80px"
                                            object-fit="cover"
                                            radius='md'
                                            src={products[product_Id]?.product_image}
                                            effect="blur" /> :
                                        <Image
                                            width='80px'
                                            height={80}
                                            radius='md'
                                            withPlaceholder
                                        />
                                }

                                <div className={classes.product_cart_rm}
                                    onClick={() => removeItemToCartHandler(product_Id)}
                                >
                                    <IconX size={22} stroke={4} color="red" />
                                </div>

                            </div>
                            <div className={classes.cart_context}>
                                <div className={classes.cart_counter_area}>
                                    <div className={classes.cart_content_area}>
                                        <Text component='p' size="sm" weight={500}>
                                            {products[product_Id]?.title}
                                        </Text>

                                        <Text color='#909296' size="sm" weight={600}>
                                            Qty - {products[product_Id]?.price} X {products[product_Id]?.quantity}
                                        </Text>

                                    </div>
                                    <div className={classes.cart_btn_area}>
                                        <Text size="md" weight={800}>
                                            ৳ {products[product_Id]?.quantity * products[product_Id]?.price}
                                        </Text>
                                        <div className={classes.cart_counter}>
                                            <CartCounter product={products[product_Id]} paddingStyle={{ padding: '0px 5px' }} qty_padding={{ padding: '0px 5px' }} />
                                        </div>
                                    </div>

                                </div>
                                {/* <div className={classes.sub_cost_area}>
                               

                                
                                <div className={classes.remove_item}>
                                    <IconX size={20} stroke={4} color="red" />
                                 </div>
                            </div> */}


                            </div>
                        </div >
                    ))
                }
            </ScrollArea>

            <Cart_Checkout />

        </div>
    )
};