import React from 'react';
import styles from './Wiki.module.css';
import { working } from '../../../public/img';
import Image from 'next/image';

const Wiki = () => {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<Image src={working} width={1000} height={1000} quality={70} className={styles.img} />
				<h2>Sorry... the Wiki section is under contruction</h2>
			</div>
		</main>
	);
};

export default Wiki;
