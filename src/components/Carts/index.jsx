import React from 'react';
import { Cart_Desktop_V } from './Cart_Desktop_V';
import { EmptyUi } from 'components/UI/EmptyUi';
import {animationData} from 'static/raw';

export const Cart_Holder = ({ products }) => {
  return (
    <div>
      {
        Object.keys(products).length === 0 ?
          <EmptyUi title="Cart Empty - No Product" ani_src={animationData?.empty_cart} />
          :
          <Cart_Desktop_V products={products} />
      }

    </div>
  )
};