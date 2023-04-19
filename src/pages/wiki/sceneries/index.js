import React from 'react';
// import { data } from '@/pages/wiki/sceneries/data.json';
import styles from './Sceneries.module.css';
import SceneryCard from '@/components/SceneryCard/SceneryCard';
const Sceneries = () => {
	return (
		<main className={styles.main}>
			{data.map((item) => {
				return <SceneryCard key={item.id} name={item.name} thumb={item.thumb} img={item.img} />;
			})}
		</main>
	);
};
export default Sceneries;
