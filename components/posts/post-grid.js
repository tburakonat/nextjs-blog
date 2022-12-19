import styles from '../../styles/post-grid.module.css';
import PostItem from './post-item';

export default function PostGrid(props) {
	const { posts } = props;

	return (
		<ul className={styles.grid}>
			{posts.map(post => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	);
}
