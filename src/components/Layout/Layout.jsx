import { useState } from 'react';
import { Container } from '@mantine/core';
import { NavBar } from './NavBar'
import { PageLoader } from 'components/UI/Loader';
import { StaticFeature } from 'components/StaticFeature';
import { Sticky_Cart } from 'components/UI/Sticky_Cart';
import { Cart_Drawer } from 'components/UI/Cart_Drawer';


const Layout = ({ loader = false, sticky_cart = true, footerTopStatic = true, children }) => {

    // cart open drawer
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <NavBar />
            <Container size="97%">

                {loader === true ? <PageLoader /> : children}

                {footerTopStatic && <StaticFeature />}

            </Container>
            {sticky_cart && <Sticky_Cart opened={opened} setOpened={setOpened}/>}
            <Cart_Drawer opened={opened} setOpened={setOpened}/>
        </div>
    )
}

export default Layout;
