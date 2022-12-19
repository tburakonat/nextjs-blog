import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
	{
		title: 'Getting Started with Next.js',
		image: 'getting-started-nextjs.png',
		excerpt:
			'Next.js is the React Framework for Production. It makes building fullstack React apps and sites a breeze.',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs',
	},
	{
		title: 'Getting Started with Next.js',
		image: 'getting-started-nextjs.png',
		excerpt:
			'Next.js is the React Framework for Production. It makes building fullstack React apps and sites a breeze.',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs2',
	},
	{
		title: 'Getting Started with Next.js',
		image: 'getting-started-nextjs.png',
		excerpt:
			'Next.js is the React Framework for Production. It makes building fullstack React apps and sites a breeze.',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs3',
	},
	{
		title: 'Getting Started with Next.js',
		image: 'getting-started-nextjs.png',
		excerpt:
			'Next.js is the React Framework for Production. It makes building fullstack React apps and sites a breeze.',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs4',
	},
];

export default function AllPostsPage() {
	return <AllPosts posts={DUMMY_POSTS} />;
}
