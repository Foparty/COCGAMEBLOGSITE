import React from 'react';
import styles from './Wiki.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { main, nocturna, capital, wallcontact } from '../../../public/img';

const Wiki = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Link href={'/wiki/mainvillage'} className={styles.mainvillage}>
					<Image
						src={main}
						className={styles.img}
						alt={'clash of clans landscape'}
						priority={true}
						width={1000}
						height={1000}
						quality={50}
					/>
					<h2 className={styles.title}>Main Village</h2>
				</Link>
				<Link href={'/wiki/builderbbase'} className={styles.builder}>
					<Image
						src={nocturna}
						className={styles.img}
						alt={'clash of clans capital mountain landscape'}
						priority={true}
						width={1000}
						height={1000}
						quality={50}
					/>
					<h2 className={styles.title}>Builder Base</h2>
				</Link>
				<Link href={'/wiki/capital'} className={styles.capital}>
					<Image
						src={capital}
						className={styles.img}
						alt={'clash of clans image of three barbarians figthing a cannon'}
						priority={true}
						width={1000}
						height={1000}
						quality={50}
					/>
					<h2 className={styles.title}>Capital</h2>
				</Link>
				<Link href={'/contact'} className={styles.contact}>
					<Image
						src={wallcontact}
						className={styles.img}
						alt={'clash of clans image of three barbarians figthing a cannon'}
						priority={true}
						width={1000}
						height={1000}
						quality={50}
					/>
					<h2 className={styles.title}>Contact</h2>
				</Link>
			</main>
		</>
	);
};

export default Wiki;
