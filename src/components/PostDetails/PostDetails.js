import React from 'react';
import styles from './PostDetails.module.css';
import Image from 'next/image';
import moment from 'moment';

const PostDetails = ({ post }) => {
	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case 'heading-three':
				return (
					<h3 key={index} className={styles.head3}>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h3>
				);
			case 'paragraph':
				return (
					<p key={index} className={styles.paragraph}>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</p>
				);
			case 'heading-four':
				return (
					<h4 key={index} className={styles.head4}>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h4>
				);
			case 'image':
				return (
					<img
						key={index}
						alt={obj.title}
						height={obj.height}
						width={obj.width}
						src={obj.src}
						className={styles.inimg}
					/>
				);
			default:
				return modifiedText;
		}
	};
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
			<div className={styles.content}>
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
				{post.content.raw.children.map((typeObj, index) => {
					const children = typeObj.children.map((item, itemindex) =>
						getContentFragment(itemindex, item.text, item)
					);
					return getContentFragment(index, children, typeObj, typeObj.type);
				})}
			</div>
		</article>
	);
};

export default PostDetails;
