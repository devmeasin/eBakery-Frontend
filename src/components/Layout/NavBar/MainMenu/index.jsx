import { useState, useEffect } from 'react';
import { Header, Menu, Avatar, Group, Button, UnstyledButton, Divider, Box, Burger, Drawer, Collapse, ScrollArea, Container } from '@mantine/core';

import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconUserPlus, IconAssembly } from '@tabler/icons';

import { ColorSchemeToggle } from '../../../ColorSchemeToggle/ColorSchemeToggle';
import { useStyles } from './Navbar.styles';
import { SearchBar } from '../Search';
import { useStickNav } from 'hooks/useStickNav';
import Link from 'next/link';

export const MainMenu = () => {

    const scroll = useStickNav();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const matches = useMediaQuery('(max-width: 766px)');
    const { classes, theme } = useStyles();

    return (
        <Box>

            <Header height={60} px="md" className={`${matches && scroll === true ? classes.smart_scroll : classes.scrolled_up}`}>
                <Container size="97%">
                    <div className={classes.menu_wrapper}>
                        <div className={`${classes.mobile_menu} ${classes.hiddenDesktop}`}>
                            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                        </div>

                        <div className={classes.logo_wrapper}>
                            <Link Link href='/' passHref>
                                <h3 style={{cursor : 'pointer'}}>eBakery</h3>
                            </Link>
                        </div>

                        <div className={`${classes.search_bar} ${classes.hiddenMobile} `}>
                            <SearchBar />
                        </div>

                        <div className={` ${classes.profile} `}>

                            <div style={{ marginRight: '20px', }}>
                                <ColorSchemeToggle />
                            </div>

                            <Menu withArrow shadow="md" width={180}>
                                <Menu.Target>
                                    <Avatar radius="xl" src="https://scontent.fcgp25-1.fna.fbcdn.net/v/t1.6435-9/186938083_2843672705892625_8187455433643123345_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHCKHRvPn79lNruhW8J-weVEdmFCowLZJUR2YUKjAtklU-XCJRN7oZH2m6O0HsChye2Kk23vjfDDX4KakuR0mli&_nc_ohc=WeRovMghYTgAX8KxpjI&_nc_ht=scontent.fcgp25-1.fna&oh=00_AfCQNnfGYBgALvfmjtdQoiJ_zQyO8RxzBFteIkl0_SRDug&oe=637F5822" alt="it's me" />
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Link href='/auth/login' passHref>
                                        <Menu.Item icon={<IconAssembly size={20} />} >
                                            <b>Signin</b>
                                        </Menu.Item>
                                    </Link>
                                    <Link href='/auth/register' passHref>
                                        <Menu.Item icon={<IconUserPlus size={20} />} >
                                            <b>Signup</b>
                                        </Menu.Item>
                                    </Link>
                                </Menu.Dropdown>
                            </Menu>

                        </div>


                    </div>
                </Container>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="75%"
                padding="md"
                title="Mantine UI"
                className={classes.hiddenDesktop}
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
                overlayOpacity={0.55}
                overlayBlur={3}
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    {/* <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} /> */}

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box >
    );
};