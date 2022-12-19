import PostHeader from './post-header';
import styles from '../../../styles/post-content.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
	title: 'Getting Started with Next.js',
	image: 'getting-started-nextjs.png',
	excerpt:
		'Next.js is the React Framework for Production. It makes building fullstack React apps and sites a breeze.',
	date: '2022-02-10',
	slug: 'getting-started-with-nextjs',
	content: '# This is a first post!',
};

const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

export default function PostContent() {
	return (
		<article className={styles.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
}
