import { useState } from 'react';
import { Skeleton, Loader, Carousel } from '@mantine/core';

export const PageLoader = () => {
    return (
        <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="https://nest-nextjs.vercel.app/assets/imgs/theme/loading.gif" alt="" />
        </div>
    )
};


export const Spainer = () => {
    return <Loader color="green" />;
}

