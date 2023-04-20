import { sceneries } from './data';
import styles from './Sceneries.module.css';
import SceneryCard from '@/components/SceneryCard/SceneryCard';
const Sceneries = () => {
	console.log(sceneries);
	return (
		<main className={styles.main}>
			{sceneries.map((item) => {
				return <SceneryCard key={item.id} name={item.name} thumb={item.thumb} img={item.img} />;
			})}
		</main>
	);
};
export default Sceneries;
