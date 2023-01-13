import React from 'react';
import { Cart_Desktop_V } from './Cart_Desktop_V';

export const Cart_Holder = ({ products }) => {
  return (
    <div>
      <Cart_Desktop_V products={products} />
    </div>
  )
};