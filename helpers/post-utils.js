import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
	const FILE_PATH = path.join(POSTS_PATH, fileName);
	const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
	const { data, content } = matter(fileContent);

	const slug = fileName.replace(/\.md$/, '');

	const postData = {
		slug,
		...data,
		content,
	};

	return postData;
}

export function getAllPosts() {
	const postFiles = fs.readdirSync(POSTS_PATH);

	const allPosts = postFiles.map(postFile => getPostData(postFile));

	const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

	return sortedPosts;
}

export function getFeaturedPosts() {
	const allPosts = getAllPosts();

	return allPosts.filter(post => post.isFeatured);
}
