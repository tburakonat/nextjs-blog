import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/post-utils';

export default function AllPostsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta name="description" content="A list of all programming-related tutorials and posts!" />
			</Head>
			<AllPosts posts={props.allPosts} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			allPosts,
		},
	};
}
