import { Categories } from 'components/Categories';
import Layout from 'components/Layout/Layout';
import { HeroSection } from 'components/HeroSection';
import { Welcome } from 'components/Welcome/Welcome';

export default function HomePage() {
	return (
		<>
			<Layout>
				<HeroSection/>
				<Categories categoryType='slide'/>
				<Welcome />
			</Layout>
		</>
	);
}
