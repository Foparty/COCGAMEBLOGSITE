import { useEffect } from 'react';
// import styles from './Troop.module.css';

const Troop = () => {
	// const [data, setData] = useState([]);

	useEffect(() => {
		fetch('./api/troops')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
			});
	}, []);

	return <h1>hola</h1>;
};
export default Troop;
