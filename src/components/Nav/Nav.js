import React from 'react';
import styles from './Nav.module.css';
import { logo } from '../../../public';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
	return (
		<nav className={styles.mainnav}>
			<div className={styles.navcontent}>
				{/* empty div for maybe useranme on login or something like that */}
				<Link href={'/'} className={styles.leftnav}>
					Home
				</Link>
				<Link href={'/'}>
					<Image
						priority={true}
						src={logo}
						className={styles.logo}
						height={80}
						alt="Clash of Clans Logo with no background png"
					/>
				</Link>
				<Link href={'/blog'}>Blog</Link>
			</div>
		</nav>
	);
};

export default Nav;
