import React from 'react';
import { useStyles } from './sticky_cart.style.js';
import { imageData } from 'static/raw';
import { Image, Text } from '@mantine/core';
// import shop_bag from 'static/raw/images/bag.png';

export const Sticky_Cart = ({ openHandler }) => {

  const { classes } = useStyles();
  const { shop_bag } = imageData;

  console.log(shop_bag)

  return (
    <div className={classes.shoppingCart} onClick={() => openHandler()}>

      <div className={classes.bag_area}>
        <Image src={shop_bag} alt="shop_bag" />
      </div>

      <div className={classes.bag_item}>
        <Text component='p' fw={700}>5 ITEM(S)</Text>
      </div>

    </div>
  );

};