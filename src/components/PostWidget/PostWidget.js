import React, { useState, useEffect } from 'react';
import styles from './PostWidget.module.css';
import Image from 'next/image';

import { getRecentPosts, getSimilarPosts } from '../../services';
import moment from 'moment';
import Link from 'next/link';

const PostWidget = ({ categories, slug }) => {
	const [relatedPost, setRelatedPost] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug).then((res) => setRelatedPost(res));
		} else {
			getRecentPosts().then((res) => setRelatedPost(res));
		}
	}, [slug]);

	return (
		<div className={styles.container}>
			<h3>{slug ? 'Related Posts' : 'Recent Posts'}</h3>
			{relatedPost.map((post) => {
				return (
					<div className={styles.each} key={post.title}>
						<Image
							className={styles.thumb}
							src={post.featuredImage.url}
							width={200}
							height={200}
							alt={post.title}
						/>
						<div className={styles.data}>
							<Link href={`/blog/post/${post.slug}`} className={styles.title}>
								{post.title}
							</Link>
							<small className={styles.date}>{moment(post.createdAt).format('DD MMM, YYYY')}</small>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PostWidget;
