import React from 'react';
import qs from 'qs';
import { Card, Grid, Image, Text, Badge, Button, Group, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FavouriteBtn } from '../FavouriteButton';
import { CartCounter } from '../AddToCart/cart-counter';
import { AddToCart } from '../AddToCart/add-to-cart';
import { TabBottom } from './TabBottom';
import { ProductDescription } from './ProductDescription';
import { StaticFeatureCard } from 'components/StaticFeature/StaticFeatureCard';
import { staticFeatureData } from 'static/staticFeature';
import { useGetProductByCategoryQuery } from 'store/services/categoriesApi';
import { product_dtos } from 'utils/helpers/product_dtos';
import { RelatedProduct } from '../RelatedProduct';

export const ProductDetails = ({ product }) => {

    const carts = useSelector((state) => state.cartItems.carts);


    const autoplay = useRef(Autoplay({ delay: 3000 }));
    const matches = useMediaQuery('(min-width: 992px)');

    const product_details = product[0];

    const queryString = qs.stringify({
        populate: '*',
        sort: ['id:desc'],
        filters: {
            category: {
                slug: product_details?.category?.slug,
            },
        },
    });

    const { data, isLoading, isError, status } = useGetProductByCategoryQuery(queryString);
    const RelatedProducts = product_dtos(data) || [];

    console.log({ RelatedProducts });


    return (
        <div>
            <h4>ProductDetails</h4>

            <Card shadow="sm" p="lg" radius="lg" withBorder>

                <Grid>
                    <Grid.Col sm={12} md={5} >
                        <div style={{ padding: `${matches ? '8% 0' : ''}` }}>
                            <Carousel
                                mx="auto"
                                align="center"
                                withIndicators
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                                styles={{
                                    indicator: {
                                        width: 10,
                                        height: 4,
                                        transition: 'width 250ms ease',
                                        backgroundColor: '#40c057',

                                        '&[data-active]': {
                                            width: 20,
                                        },
                                    },
                                }}
                            >
                                {
                                    product_details?.product_gallery?.data !== null ?
                                        product_details?.product_gallery?.data.map((image, index) => (
                                            <Carousel.Slide key={index}>
                                                <div style={{ height: `${matches ? '430px' : '100%'}`, objectFit: "cover" }}>
                                                    <LazyLoadImage
                                                        style={{ borderRadius: '20px' }}
                                                        width="100%"
                                                        height="100%"
                                                        objectFit="cover"
                                                        radius='md'
                                                        src={image?.attributes?.url}
                                                        effect="blur" />
                                                </div>

                                            </Carousel.Slide>
                                        )) :
                                        <Carousel.Slide>
                                            <div style={{
                                                height: `${matches ? '430px' : '100%'}`,
                                                objectFit: "cover"
                                            }}>
                                                <LazyLoadImage
                                                    style={{ borderRadius: '20px' }}
                                                    width="100%"
                                                    height="100%"
                                                    src={product_details?.product_image}
                                                    effect="blur" />
                                                {/* <Image
                                                    width="100%"
                                                    height="100%"
                                                    radius='md'
                                                    src={product_details?.product_image}
                                                    alt={'Product_image'}
                                                    withPlaceholder
                                                /> */}
                                            </div>
                                        </Carousel.Slide>
                                }
                            </Carousel>
                        </div>
                    </Grid.Col>


                    <Grid.Col sm={12} md={7}>

                        <div style={{ paddingTop: `${matches ? '8%' : ''}` }}>

                            <Group position="apart" mt="md" mb="xs">
                                <Title order={3}>{product_details?.title} </Title>
                                {
                                    matches === true && <Badge color="pink" variant="light">
                                        On Sale
                                    </Badge>
                                }

                            </Group>

                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={600}>
                                    <Text weight={700} span> Category - </Text>
                                    {product_details?.category?.name}
                                </Text>
                            </Group>

                            {
                                product_details.product_variation.length > 0 &&
                                <Group position="apart" mt="md" mb="xs">
                                    <Text weight={700}> Product Variation - </Text>
                                </Group>
                            }


                            <Group position="apart" mt="lg" mb="lg">

                                {
                                    product_details?.price > 0 && product_details?.sale_price === null &&
                                    <Title order={3} color="teal.6">
                                        {`৳‎ ${product_details?.price}`}
                                    </Title>
                                }
                                {
                                    product_details?.price > product_details?.sale_price && product_details?.sale_price !== null &&
                                    <Title order={3} color="teal.6">
                                        {`৳‎ ${product_details?.sale_price}`}

                                        <del weight={700} style={{ marginLeft: '20px', fontSize: '18px' }}>
                                            {product_details?.price > product_details?.sale_price ? `৳‎ ${product_details?.price}` : ''}
                                        </del>
                                    </Title>
                                }

                            </Group>


                            <div style={{ display: 'flex', }}>

                                {
                                    matches && <div style={{ width: '15%', display: 'flex' }}>
                                        <FavouriteBtn product={product_details} />
                                    </div>
                                }

                                <div style={{ width: '85%', marginRight: `${matches === false ? '20px' : ''}` }} >
                                    {
                                        carts[product_details?.id] ?
                                            <div style={{ width: `${matches ? '60%' : ''}` }}>
                                                <CartCounter product={product_details} />
                                            </div>
                                            :
                                            <div style={{ width: `${matches ? '60%' : ''}` }}>
                                                <AddToCart product={product_details} />
                                            </div>

                                    }
                                </div>

                                {
                                    matches === false && <div style={{ width: '15%' }}>
                                        <FavouriteBtn product={product_details} />
                                    </div>
                                }
                            </div>

                            {
                                matches &&
                                <Group mt="lg">
                                    <StaticFeatureCard title={staticFeatureData[0].title} subTitle={staticFeatureData[0].subTitle} image={staticFeatureData[0].image} />
                                    <StaticFeatureCard title={staticFeatureData[1].title} subTitle={staticFeatureData[1].subTitle} image={staticFeatureData[1].image} />
                                </Group>
                            }

                        </div>

                    </Grid.Col>
                </Grid>
            </Card >

            {product_details?.description && <TabBottom />}
            {
                product_details?.description && <ProductDescription description={product_details?.description} />
            }

            {
                RelatedProducts.length > 0 && <div>
                    <RelatedProduct categoryOfProduct={RelatedProducts} />
                </div>
            }

        </div >
    )
};