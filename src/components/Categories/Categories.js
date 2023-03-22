import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Categories.module.css';

import { getCategories } from '../../services';

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((newCategories) => setCategories(newCategories));
	}, []);

	return (
		<main className={styles.catcontainer}>
			{categories.map(({ name, slug }) => {
				return (
					<Link href={`/category/${slug}`} className={styles.btn} key={slug}>
						{name}
					</Link>
				);
			})}
		</main>
	);
};

export default Categories;
