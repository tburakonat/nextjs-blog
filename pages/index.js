import { Fragment } from 'react';
import Hero from '../components/homepage/hero';
import FeaturedPosts from '../components/homepage/featured-posts';
import { getFeaturedPosts } from '../helpers/post-utils';

export default function HomePage(props) {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={props.featuredPosts} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			featuredPosts,
		},
	};
}
