import PostHeader from './post-header';
import styles from '../../../styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';

export default function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	return (
		<article className={styles.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	);
}
