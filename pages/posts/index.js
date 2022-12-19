import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/post-utils';

export default function AllPostsPage(props) {
	return <AllPosts posts={props.allPosts} />;
}

export async function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			allPosts,
		},
	};
}
