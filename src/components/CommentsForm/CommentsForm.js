import React, { useEffect, useState } from 'react';
import styles from './CommentsForm.module.css';
import { submitComment } from '../../services';

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState(false);
	const [localStorage, setLocalStorage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const [formData, setFormData] = useState({
		name: null,
		email: null,
		comment: null,
		storeData: false,
	});

	useEffect(() => {
		setLocalStorage(window.localStorage);
		const initialFormData = {
			name: window.localStorage.getItem('name'),
			email: window.localStorage.getItem('email'),
			storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
		};
		setFormData(initialFormData);
	}, []);

	function onInputChange(e) {
		const { target } = e;
		if (target.type === 'checkbox') {
			setFormData((prevState) => ({
				...prevState,
				[target.name]: target.checked,
			}));
		} else {
			setFormData((prevState) => ({
				...prevState,
				[target.name]: target.value,
			}));
		}
	}

	function handleCommentSubmission(e) {
		e.preventDefault();
		setError(false);
		const { name, email, comment, storeData } = formData;
		if (!name || !email || !comment) {
			setError(true);
			return;
		}
		const commentObj = {
			name,
			email,
			comment,
			slug,
		};

		if (storeData) {
			localStorage.setItem('name', name);
			localStorage.setItem('email', email);
		} else {
			localStorage.removeItem('name');
			localStorage.removeItem('email');
		}

		submitComment(commentObj).then((res) => {
			if (res.createComment) {
				if (!storeData) {
					formData.name = '';
					formData.email = '';
				}
				formData.comment = '';
				setFormData((prevState) => ({
					...prevState,
					...formData,
				}));
				setShowSuccessMessage(true);
				setTimeout(() => {
					setShowSuccessMessage(false);
				}, 3000);
			}
		});
	}

	return (
		<article className={styles.commentsform}>
			<h2 className={styles.title}>Make a new comment:</h2>
			<form onSubmit={handleCommentSubmission}>
				<textarea
					className={styles.commentarea}
					value={formData.comment}
					onChange={onInputChange}
					placeholder="Comment goes here..."
					name="comment"
				/>
				<div className={styles.userdata}>
					<div className={styles.user}>
						<label htmlFor="name" className={styles.title}>
							Name:
						</label>
						<input
							className={styles.data}
							type="text"
							value={formData.name}
							onChange={onInputChange}
							id="name"
							name="name"
							placeholder="Name goes here..."
						/>
					</div>
					<div className={styles.user}>
						<label htmlFor="email" className={styles.title}>
							Email:
						</label>
						<input
							className={styles.data}
							type="email"
							value={formData.email}
							onChange={onInputChange}
							id="email"
							name="email"
							placeholder="Email goes here..."
						/>
					</div>
				</div>
				<div className={styles.store}>
					<input
						checked={formData.storeData}
						className={styles.storecheck}
						onChange={onInputChange}
						type="checkbox"
						name="storeData"
						id="storeData"
						value="true"
					/>
					<label className={styles.storelabel} htmlFor="storeData">
						Save my data for next time
					</label>
				</div>
				{error && <p className={styles.error}>All fields are required</p>}
				<button className={styles.submit} type="submit">
					Post Comment
				</button>
				{showSuccessMessage && <span className={styles.success}>Comment submitted for review</span>}
			</form>
		</article>
	);
};

export default CommentsForm;
