import Head from 'next/head';
import { Fragment } from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../helpers/post-utils';

export default function PostDetailPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.post.title}</title>
				<meta name="description" content={props.post.excerpt} />
			</Head>
			<PostContent post={props.post} />
		</Fragment>
	);
}

export function getStaticPaths() {
	const allPosts = getPostsFiles();
	const slugs = allPosts.map(post => post.replace(/\.md$/, ''));
	const paths = slugs.map(slug => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { slug } = context.params;

	const post = getPostData(slug);

	return {
		props: {
			post,
		},
		revalidate: 600, // This way we don't have to build our app every time we make a change to a post
	};
}
