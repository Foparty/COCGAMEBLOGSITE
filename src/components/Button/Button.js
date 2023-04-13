import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, state }) => {
	console.log(state);

	return (
		<>
			<button
				className={styles.button}
				style={
					state === 'success'
						? { backgroundImage: 'linear-gradient( #8fd335, #65ad3b)' }
						: null || state === 'red'
						? { backgroundImage: 'linear-gradient( red, green)' }
						: null
				}
			>
				<span className={styles.text}>{text}</span>
			</button>
		</>
	);
};
export default Button;
