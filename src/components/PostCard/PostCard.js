import React from 'react';
import styles from './PostCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

const PostCard = ({ post }) => {
	console.log(post.categories);
	return (
		<article className={styles.singlecard}>
			<div className={styles.imgcontainer}>
				<Link href={`/blog/post/${post.slug}`}>
					<Image
						src={post.featuredImage.url}
						alt={post.title}
						width={400}
						height={400}
						quality={30}
						priority={true}
						className={styles.img}
					/>
				</Link>
				<small className={styles.date}>{moment(post.createdAt).format('DD MMM, YYYY')}</small>
			</div>
			<div className={styles.textcontainer}>
				<Link href={`/blog/post/${post.slug}`}>
					<h2 className={styles.title}>{post.title}</h2>
				</Link>
				<p className={styles.excerpt}>{post.excerpt}</p>
			</div>
		</article>
	);
};

export default PostCard;
