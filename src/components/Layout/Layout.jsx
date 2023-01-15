import { Container } from '@mantine/core';
import { PageLoader } from 'components/Loader';
import { StaticFeature } from 'components/StaticFeature';
import { FooterSection } from '../../components/FooterSection';
import { NavBar } from './NavBar';

const Layout = ({ loader = false, footerTopStatic = true, children }) => {
	return (
		<div>
			<NavBar />
			<Container size='97%'>
				{loader === true ? <PageLoader /> : children}

				{footerTopStatic && <StaticFeature />}
			</Container>
			<FooterSection />
		</div>
	);
};

export default Layout;
