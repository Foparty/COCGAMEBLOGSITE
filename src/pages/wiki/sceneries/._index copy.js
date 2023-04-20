import data from './data.json';
import styles from './Sceneries.module.css';
import SceneryCard from '@/components/SceneryCard/SceneryCard';
const Sceneries = () => {
	console.log(data);
	return (
		<main className={styles.main}>
			{data.sceneries.map((item) => {
				return <SceneryCard key={item.id} name={item.name} thumb={item.thumb} img={item.img} />;
			})}
		</main>
	);
};
export default Sceneries;
