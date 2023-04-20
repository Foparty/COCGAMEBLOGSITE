import Link from 'next/link';
import styles from './MyLink.module.css';

const MyLink = ({ url, text, clase, children }) => {
	return (
		<Link href={url} className={styles[clase]}>
			{text ? text : children}
		</Link>
	);
};

export default MyLink;
