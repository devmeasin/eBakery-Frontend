import { Carousel } from '@mantine/carousel';
import { Grid } from '@mantine/core';
import { Category } from 'components/Categories/Category';
import { CategoryLoader } from 'components/UI/Loader/CategoryLoader';
import { useGetCategoryDataQuery } from 'store/services/categoriesApi';
import { categories_dtos } from 'utils/helpers/categories_dtos';

export const Categories = ({ categoryType = 'grid' }) => {

	const { data, isLoading, isError, status } = useGetCategoryDataQuery();
	const categoriesData = categories_dtos(data);

	return (

		categoryType === 'grid' ?

			(
				categoriesData?.length > 0 ?
					<Grid >
						{
							categoriesData?.map((category) => (
								<Grid.Col  md={2} lg={1} key={category.name}>
									<Category category={category} />
								</Grid.Col>

							))
						}
					</Grid>

					: <CategoryLoader />
			)

			:

			(
				categoriesData?.length > 0 ?
					<Carousel
						slideSize='100px'
						height={120}
						align='start'
						slideGap='sm'
						controlSize={categoriesData?.length}
						loop
						dragFree
					>
						{
							categoriesData?.map((category) => (
								<Carousel.Slide key={category.name}>
									<Category category={category} />
								</Carousel.Slide>
							))
						}
					</Carousel> : <CategoryLoader />
			)

	);
};
