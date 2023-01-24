import React from 'react';
import { Container } from '@mantine/core';
import { NavBar } from './NavBar'
import { PageLoader } from 'components/UI/Loader';
import { StaticFeature } from 'components/StaticFeature';
import { Sticky_Cart } from 'components/UI/Sticky_Cart';


const Layout = ({ loader = false, sticky_cart = true, footerTopStatic = true, children }) => {
    return (
        <div>
            <NavBar />
            <Container size="97%">

                {loader === true ? <PageLoader /> : children}

                {footerTopStatic && <StaticFeature />}

            </Container>
            {sticky_cart && <Sticky_Cart />}
        </div>
    )
}

export default Layout;
