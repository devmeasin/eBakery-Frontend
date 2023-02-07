import React from 'react';
import { Carousel } from '@mantine/carousel'
import { Product } from '..';

export const RelatedProduct = ({ categoryOfProduct = [] }) => {
    return (
        <div>
            <Carousel align="start" slideSize="25%" slidesToScroll={3} height={400} slideGap="md" dragFree >
                {
                    categoryOfProduct.map((product, ind) => (
                        <Carousel.Slide key={ind}>
                            <Product product={product} />
                        </Carousel.Slide>
                    ))
                }

            </Carousel>
        </div>
    )
}
