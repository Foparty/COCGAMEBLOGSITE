import Nav from '../Nav/Nav';
import BackButton from '../BackButton/BackButton';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />

			{children}
			<BackButton />
		</>
	);
};

export default Layout;
