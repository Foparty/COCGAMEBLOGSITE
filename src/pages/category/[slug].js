import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';

import PostCard from '@/components/PostCard/PostCard';
import Categories from '@/components/Categories/Categories';
import Loader from '@/components/Loader/Loader';
import styles from './CategoryPage.module.css';

const CategoryPost = ({ posts }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Loader />;
	}

	return (
		<>
			<aside className={styles.aside}>
				<Categories />
			</aside>
			<main className={styles.main}>
				{posts.map((post, index) => (
					<PostCard key={index} post={post.node} />
				))}
			</main>
		</>
	);
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
	const posts = await getCategoryPost(params.slug);

	return {
		props: { posts },
	};
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
	const categories = await getCategories();
	return {
		paths: categories.map(({ slug }) => ({ params: { slug } })),
		fallback: true,
	};
}
