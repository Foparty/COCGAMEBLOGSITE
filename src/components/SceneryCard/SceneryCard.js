import React, { useState } from 'react';
import styles from './SceneryCard.module.css';
import Image from 'next/image';

const SceneryCard = ({ thumb, name, img }) => {
	const [image, setImage] = useState(false);
	function toggleImage() {
		setImage(false);
		setImage(!image);
	}

	return (
		<>
			<div className={styles.card}>
				<Image
					className={styles.img}
					src={thumb}
					alt={name}
					width={773}
					height={773}
					quality={60}
					onClick={toggleImage}
				/>
				<h2 className={styles.title}>{name}</h2>
			</div>
			{image ? (
				<div className={styles.imgcontainer}>
					<Image
						className={styles.fullimage}
						src={img}
						alt={name}
						quality={60}
						sizes={'100vw'}
						fill
						// layout={'responsive'}
						// width={5000}
						// height={5000}
						onClick={toggleImage}
					/>
				</div>
			) : null}
		</>
	);
};
export default SceneryCard;
