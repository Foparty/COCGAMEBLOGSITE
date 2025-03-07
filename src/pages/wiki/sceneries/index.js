// import data from './data.json';
import styles from './Sceneries.module.css';
import SceneryCard from '@/components/SceneryCard/SceneryCard';
import {
	aniversary,
	aniversary2,
	aniversary2thumb,
	aniversarythumb,
	candy,
	candythumb,
	clashfest,
	clashfestthumb,
	clashy,
	clashythumb,
	classic,
	classicthumb,
	cyear,
	cyearthumb,
	darkages,
	darkagesthumb,
	epicjungle,
	epicjunglethumb,
	epicmagic,
	epicmagicthumb,
	epicwinter,
	epicwinterthumb,
	halloween,
	halloweenthumb,
	hogmountain,
	hogmountainthumb,
	jungle,
	junglethumb,
	magic,
	magicthumb,
	painters,
	paintersthumb,
	pirate,
	piratethumb,
	pixel,
	pixelthumb,
	primal,
	primalthumb,
	pumpking,
	pumpkingthumb,
	royale,
	royalethumb,
	shadow,
	shadowthumb,
	snowday,
	snowdaythumb,
	summer,
	summerthumb,
	tigermountain,
	tigermountainthumb,
} from '/public/img/scenery';

const sceneries = [
	{
		id: 1234,
		name: 'classic',
		thumb: classicthumb,
		img: classic,
	},
	{
		id: 1235,
		name: 'jungle',
		thumb: junglethumb,
		img: jungle,
	},
	{
		id: 1236,
		name: 'magic',
		thumb: magicthumb,
		img: magic,
	},
	{
		id: 1237,
		name: 'epic winter',
		thumb: epicwinterthumb,
		img: epicwinter,
	},
	{
		id: 1238,
		name: 'hog mountain',
		thumb: hogmountainthumb,
		img: hogmountain,
	},
	{
		id: 1238,
		name: 'pirate',
		thumb: piratethumb,
		img: pirate,
	},
	{
		id: 1239,
		name: 'epic jungle',
		thumb: epicjunglethumb,
		img: epicjungle,
	},
	{
		id: 1240,
		name: '9th clashiversary',
		thumb: aniversarythumb,
		img: aniversary,
	},
	{
		id: 1241,
		name: 'pumpkin graveyard',
		thumb: pumpkingthumb,
		img: pumpking,
	},
	{
		id: 1242,
		name: 'snow day',
		thumb: snowdaythumb,
		img: snowday,
	},
	{
		id: 1243,
		name: 'tiger mountain',
		thumb: tigermountainthumb,
		img: tigermountain,
	},
	{
		id: 1244,
		name: 'pixel',
		thumb: pixelthumb,
		img: pixel,
	},
	{
		id: 1245,
		name: 'primal',
		thumb: primalthumb,
		img: primal,
	},
	{
		id: 1246,
		name: 'shadow',
		thumb: shadowthumb,
		img: shadow,
	},
	{
		id: 1247,
		name: 'royale',
		thumb: royalethumb,
		img: royale,
	},
	{
		id: 1248,
		name: 'summer',
		thumb: summerthumb,
		img: summer,
	},
	{
		id: 1249,
		name: '10th clashiversary',
		thumb: aniversary2thumb,
		img: aniversary2,
	},
	{
		id: 1250,
		name: 'clash fest',
		thumb: clashfestthumb,
		img: clashfest,
	},
	{
		id: 1251,
		name: 'clashy contructs',
		thumb: clashythumb,
		img: clashy,
	},
	{
		id: 1252,
		name: 'epic magic',
		thumb: epicmagicthumb,
		img: epicmagic,
	},
	{
		id: 1253,
		name: 'spooky',
		thumb: halloweenthumb,
		img: halloween,
	},
	{
		id: 1254,
		name: 'jolly',
		thumb: candythumb,
		img: candy,
	},
	{
		id: 1255,
		name: 'magic theatre',
		thumb: cyearthumb,
		img: cyear,
	},
	{
		id: 1256,
		name: 'painter',
		thumb: paintersthumb,
		img: painters,
	},
	{
		id: 1257,
		name: 'dark ages',
		thumb: darkagesthumb,
		img: darkages,
	},
];

const Sceneries = () => {
	return (
		<main className={styles.main}>
			{sceneries.map((item) => {
				return <SceneryCard key={item.id} name={item.name} thumb={item.thumb} img={item.img} />;
			})}
		</main>
	);
};
export default Sceneries;
