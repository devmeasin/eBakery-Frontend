import React from 'react';
import Lottie from 'react-lottie';
import { useStyles } from './emptyui.style';
import { Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const EmptyUi = ({ title = '', ani_src }) => {

    const { classes } = useStyles();
    const matches = useMediaQuery('(min-width: 766px)');

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ani_src,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <div className={classes.empty_ui_wrapper}>
            {
                <Lottie options={defaultOptions}
                    height={400}
                    width={ matches && 400} />
            }
            <Title order={3}>{title}</Title>
        </div>
    )
};