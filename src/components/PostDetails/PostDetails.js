import React from 'react';
import styles from './PostDetails.module.css';
import Image from 'next/image';
import moment from 'moment';
import CommentsForm from '../CommentsForm/CommentsForm';
import Comments from '../Comments/Comments';
const parse = require('html-react-parser');

const PostDetails = ({ post }) => {
	return (
		<article className={styles.post}>
			<Image
				src={post.featuredImage.url}
				width={1000}
				height={1000}
				quality={30}
				priority={true}
				className={styles.cover}
				alt={post.title}
			/>
			<div className={styles.container}>
				<h1 className={styles.title}>{post.title}</h1>
				<small className={styles.date}>{moment(post.createdAt).format('DD MMM, YYYY')}</small>
				<section className={styles.growning}>
					{post.postImages.map((image, index) => {
						return (
							<div className={styles.imgcontainer} key={index}>
								<Image
									src={image.url}
									alt={post.title}
									width={300}
									height={300}
									quality={30}
									className={styles.imgcarousel}
								/>
							</div>
						);
					})}
				</section>
				<section className={styles.content}>{parse(post.content.html)}</section>
				<CommentsForm slug={post.slug} />
				<Comments slug={post.slug} />
			</div>
		</article>
	);
};

export default PostDetails;
