import React from 'react';
import { getPostDetails, getPosts } from '../../../services';
import styles from './Post.module.css';
import PostDetails from '@/components/PostDetails/PostDetails';
import CommentsForm from '@/components/CommentsForm/CommentsForm';
import Comments from '@/components/Comments/Comments';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader/Loader';

const Post = ({ post }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />;
	}
	return (
		<main className={styles.main}>
			<PostDetails post={post} />
			<CommentsForm slug={post.slug} />
			<Comments slug={post.slug} />
		</main>
	);
};

export default Post;

export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);

	return {
		props: { post: data },
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();

	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: true,
	};
}
