import Link from 'next/link';
import styles from './MainVillage.module.css';
import Button from '@/components/Button/Button';

const MainVillage = () => {
	return (
		<main className={styles.main}>
			<Link href={'/wiki/sceneries'} className={styles.link}>
				scene
			</Link>
			<Link href={'/wiki/troops'} className={styles.link}>
				troops
			</Link>
			<Button text={'Click here!'} state={'red'} />
		</main>
	);
};
export default MainVillage;
