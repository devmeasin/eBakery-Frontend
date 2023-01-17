import React from 'react';
import { Container } from '@mantine/core';
import { NavBar } from './NavBar'
import { PageLoader } from 'components/UI/Loader';
import { StaticFeature } from 'components/StaticFeature';


const Layout = ({ loader = false, footerTopStatic = true, children }) => {
    return (
        <div>
            <NavBar />
            <Container size="97%">

                {loader === true ? <PageLoader /> : children}

                {footerTopStatic && <StaticFeature />}

            </Container>
        </div>
    )
}

export default Layout;
