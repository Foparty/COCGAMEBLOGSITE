import styles from './Contact.module.css';
import { working } from '../../../public/img';
import Image from 'next/image';

const Shop = () => {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<Image
					src={working}
					width={1000}
					height={1000}
					quality={80}
					className={styles.img}
					alt={'check alt'}
				/>
				<h2>Sorry... the Contact section is under contruction</h2>
			</div>
		</main>
	);
};

export default Shop;
