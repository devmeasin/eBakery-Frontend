import React from 'react';
import { Card, Image, Text, Badge, Button, Group, Skeleton, Grid } from '@mantine/core';

export const ProductLoader = () => {
    const fakeData = Array(16).fill(0);;
    return (
        <div>
            <Grid gutter="xs">
                {
                    fakeData?.map((product, ind) => (
                        <Grid.Col sm={6} md={4} lg={3} key={ind}>
                            <Card shadow="sm" p="lg" radius="md" withBorder>
                                <Card.Section component="a" href="https://mantine.dev/">
                                    <Skeleton visible={true} height="180px"></Skeleton>
                                </Card.Section>
                                <Group position="apart" mt="md" mb="xs">
                                    <Skeleton height={8} radius="xl" />
                                    <Skeleton height={8} radius="xl" width="60%"/>
                                    <Skeleton height={8} mt={2} width="70%" radius="xl" />
                                </Group>
                            </Card>
                        </Grid.Col>
                    ))
                }
            </Grid>

        </div>
    )
};
