import { Carousel } from '@mantine/carousel';
import { Skeleton } from '@mantine/core';

export const CategoryLoader = ({ loading }) => {

    const data = Array(15).fill(0);

    return (
        <>
            <Carousel
                slideSize='100px'
                height={110}
                align='start'
                slideGap='sm'
                controlSize={data?.length}
                loop
                dragFree
            >
                {
                    data?.map((_, ind) => (
                        <Carousel.Slide key={ind}>
                            <Skeleton visible={loading} radius='lg' height={100}>
                            </Skeleton>
                        </Carousel.Slide>
                    ))
                }

            </Carousel>
        </>
    );
}