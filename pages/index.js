import { Fragment } from 'react';
import Hero from '../components/homepage/hero';
import FeaturedPosts from '../components/homepage/featured-posts';
import { getFeaturedPosts } from '../helpers/post-utils';
import Head from 'next/head';

export default function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Burak's Blog</title>
				<meta name="description" content="I post about programming and web development." />
			</Head>
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
