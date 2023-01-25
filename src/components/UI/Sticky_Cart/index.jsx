import React from 'react';
import { useStyles } from './sticky_cart.style.js';
import { imageData } from 'static/raw';
import { Image, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
// import shop_bag from 'static/raw/images/bag.png';

export const Sticky_Cart = ({opened, setOpened }) => {

  const ProductInCarts = useSelector((state) => state.cartItems.carts);
  const product_length = Object.keys(ProductInCarts);
  const { classes } = useStyles();
  const { shop_bag } = imageData;


  return (
    <div className={classes.shoppingCart} onClick={() => setOpened(!opened)}>

      <div className={classes.bag_area}>
        <Image src={shop_bag} alt="shop_bag" />
      </div>

      <div className={classes.bag_item}>
        <Text component='p'>{product_length.length} ITEM(S)</Text>
      </div>

    </div>
  );

};