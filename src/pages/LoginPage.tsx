import React, { useState } from 'react';
import user from '../mockAuth/authenticatedUser.json';
import { useHistory } from 'react-router-dom';

type credentialType = {
	email: string;
	password: string;
	passwordConfirm: string;
};

export const LoginPage = () => {
	const history = useHistory();

	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
		passwordConfirm: '',
	} as credentialType);

	const onUserSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.log(credentials);

		if (credentials.password !== credentials.passwordConfirm) {
			alert('Passwords do not match!');
			return;
		} else {
			if (
				user.email === credentials.email &&
				user.password === credentials.password
			) {
				history.push('/categories');
			} else {
				alert('Invalid credentials.');
			}
		}
		setCredentials({
			email: '',
			password: '',
			passwordConfirm: '',
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setCredentials((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<form onSubmit={(e) => onUserSubmit(e)} className='form'>
			<h1>Login</h1>
			<div className='form__block'>
				<label htmlFor='email' className='form__block-label'>
					Email
				</label>
				<input
					className='form__block_input'
					type='text'
					name='email'
					id='email'
					placeholder='Your  Email'
					value={credentials.email}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<div className='form__block'>
				<label className='form__block-label' htmlFor='password'>
					Password
				</label>
				<input
					className='form__block-input'
					type='text'
					name='password'
					id='password'
					placeholder='Your  Password'
					value={credentials.password}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<div className='form__block'>
				<label className='form__block-label' htmlFor='passwordConfirm'>
					Password
				</label>
				<input
					className='form__block-input'
					type='text'
					name='passwordConfirm'
					id='passwordConfirm'
					placeholder='Confirm Password'
					value={credentials.passwordConfirm}
					onChange={(e) => handleChange(e)}
				/>
			</div>
			<button type='submit' className='btn btn__login'>
				LOGIN
			</button>
		</form>
	);
};
