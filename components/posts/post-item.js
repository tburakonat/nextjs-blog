import styles from '../../styles/post-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function PostItem(props) {
	const { title, image, excerpt, date, slug } = props.post;

	const formatedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={styles.post}>
			<Link href={linkPath}>
				<div className={styles.image}>
					<Image src={imagePath} alt={title} sizes="100%" fill />
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<time>{formatedDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
}
