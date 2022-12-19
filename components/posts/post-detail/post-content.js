import PostHeader from './post-header';
import styles from '../../../styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers = {
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				return (
					<div className={styles.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.properties.alt}
							width={600}
							height={350}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},
	};

	return (
		<article className={styles.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
}
