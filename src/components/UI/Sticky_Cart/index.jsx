import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './sticky_cart.style.js';
import { imageData } from 'static/raw';
import { Image, Text } from '@mantine/core';
// import shop_bag from 'static/raw/images/bag.png';

export const Sticky_Cart = ({ opened, setOpened }) => {

  const ProductInCarts = useSelector((state) => state.cartItems.carts);
  const [product_length, setProduct_length] = useState(0);

  useEffect(() => {
    const Product_length = Object.keys(ProductInCarts).length;
    setProduct_length(Product_length);
  }, [ProductInCarts]);

  const { classes } = useStyles();
  const { shop_bag } = imageData;


  return (
    <div className={classes.shoppingCart} onClick={() => setOpened(!opened)}>

      <div className={classes.bag_area}>
        <Image src={shop_bag} alt="shop_bag" withPlaceholder/>
      </div>

      <div className={classes.bag_item}>
        <Text component='p'><span>{product_length}</span> ITEM(S)</Text>
      </div>

    </div>
  );

};