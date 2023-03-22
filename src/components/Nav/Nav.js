import React from 'react';
import styles from './Nav.module.css';
import { logo } from '../../../public';
import Link from 'next/link';
import Image from 'next/image';
import MyLink from '../MyLink/MyLink';

const Nav = () => {
	return (
		<nav className={styles.mainnav}>
			<div className={styles.navcontent}>
				<MyLink url={'/'} text={'Home'} />
				<MyLink url={'/'}>
					<Image
						priority={true}
						src={logo}
						className={styles.logo}
						height={80}
						alt="Clash of Clans Logo with no background png"
					/>
				</MyLink>
				<MyLink url={'/blog'} text={'Blog'} />
			</div>
		</nav>
	);
};

export default Nav;
