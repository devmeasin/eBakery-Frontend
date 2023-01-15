import {
	ActionIcon,
	Container,
	createStyles,
	Grid,
	Group,
	Image,
	Text,
} from '@mantine/core';

import {
	IconBrandInstagram,
	IconBrandTwitter,
	IconBrandYoutube,
} from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: 120,
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl,
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		borderTop: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[2]
		}`,
	},

	logo: {
		maxWidth: 200,

		[theme.fn.smallerThan('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	logo_wrapper: {
		width: '20%',
		[theme.fn.smallerThan('sm')]: {
			width: '50%',
		},
		h3: {
			margin: 0,
			[theme.fn.smallerThan('sm')]: {
				textAlign: 'center',
			},
		},
	},

	description: {
		marginTop: 5,

		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
			textAlign: 'center',
		},
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	groups: {
		display: 'flex',
		flexWrap: 'wrap',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	wrapper: {
		width: 160,
	},

	link: {
		display: 'block',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[1]
				: theme.colors.gray[6],
		fontSize: theme.fontSizes.sm,
		paddingTop: 3,
		paddingBottom: 3,

		'&:hover': {
			textDecoration: 'underline',
		},
	},

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: theme.spacing.xs / 2,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},

	afterFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[4]
				: theme.colors.gray[2]
		}`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},

	social: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

const data = [
	{
		title: 'About',
		links: [
			{
				label: 'Features 1',
				link: '#',
			},
			{
				label: 'Features 2',
				link: '#',
			},
			{
				label: 'Features 3',
				link: '#',
			},
			{
				label: 'Features 4',
				link: '#',
			},
		],
	},
	{
		title: 'Project',
		links: [
			{
				label: 'Features 5',
				link: '#',
			},
			{
				label: 'Features 6',
				link: '#',
			},
			{
				label: 'Features 7',
				link: '#',
			},
			{
				label: 'Features 8',
				link: '#',
			},
		],
	},
	{
		title: 'Community',
		links: [
			{
				label: 'Features 9',
				link: '#',
			},
			{
				label: 'Features 10',
				link: '#',
			},
			{
				label: 'Features 11',
				link: '#',
			},
			{
				label: 'Features 12',
				link: '#',
			},
		],
	},
	{
		title: 'Popular',
		links: [
			{
				label: 'Features 13',
				link: '#',
			},
			{
				label: 'Features 14',
				link: '#',
			},
			{
				label: 'Features 15',
				link: '#',
			},
			{
				label: 'Features 16',
				link: '#',
			},
		],
	},
];

export const FooterSection = () => {
	const { classes } = useStyles();

	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Text
				key={index}
				className={classes.link}
				component='a'
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</Text>
		));

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer className={classes.footer}>
			<Container size='97%' className={classes.inner}>
				<div className={classes.logo}>
					<div className={classes.logo_wrapper}>
						<Link Link href='/' passHref>
							<h3 style={{ cursor: 'pointer' }}>eBakery</h3>
						</Link>
					</div>

					<Text
						size='xs'
						color='dimmed'
						className={classes.description}
					>
						Build fully functional accessible web applications
						faster than ever
					</Text>
				</div>
				<div className={classes.groups}>
					{groups}

					<div
						className={classes.wrapper}
						style={{ minWidth: '230px' }}
					>
						<Text className={classes.title}>{'Install App'}</Text>
						<div>
							<Text
								size='xs'
								color='dimmed'
								className={classes.description}
							>
								From App Store or Google Play
							</Text>

							<Grid gutter='xs'>
								<Grid.Col span={'auto'}>
									<Image
										src={
											'https://nest-nextjs.vercel.app/assets/imgs/theme/app-store.jpg'
										}
										width={'100%'}
									/>
								</Grid.Col>
								<Grid.Col span={'auto'}>
									<Image
										src={
											'https://nest-nextjs.vercel.app/assets/imgs/theme/google-play.jpg'
										}
										width={'100%'}
									/>
								</Grid.Col>
							</Grid>
						</div>

						<div>
							<Text
								size='xs'
								color='dimmed'
								className={classes.description}
							>
								From App Store or Google Play
							</Text>
							<Image
								src={
									'https://nest-nextjs.vercel.app/assets/imgs/theme/payment-method.png'
								}
								width={'100%'}
							/>
						</div>
					</div>
				</div>
			</Container>
			<Container size='97%' className={classes.afterFooter}>
				<Text color='dimmed' size='sm'>
					© 2020 mantine.dev. All rights reserved.
				</Text>

				<Group
					spacing={0}
					className={classes.social}
					position='right'
					noWrap
				>
					<ActionIcon size='lg'>
						<IconBrandTwitter size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size='lg'>
						<IconBrandYoutube size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon size='lg'>
						<IconBrandInstagram size={18} stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
};
