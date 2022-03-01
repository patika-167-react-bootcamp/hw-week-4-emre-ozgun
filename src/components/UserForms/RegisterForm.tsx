import React, { useState, useEffect } from 'react';
import './UserForm.css';
import { AuthContext, Credentials } from '../../context/auth-context';
import axios from 'axios';

type Props = {
	setFormType: React.Dispatch<React.SetStateAction<'login' | 'register'>>;
};
const baseUrl = process.env.REACT_APP_URL;

const initialRegisterState: Credentials = {
	username: '',
	password: '',
	passwordConfirm: '',
};

export const RegisterForm = ({ setFormType }: Props) => {
	const [credentials, setCredentials] =
		useState<Credentials>(initialRegisterState);

	const [disabled, setDisabled] = useState(true);

	// basic input validation
	useEffect(() => {
		if (
			!credentials.username ||
			!credentials.password ||
			!credentials.passwordConfirm ||
			credentials.password !== credentials.passwordConfirm
		) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [credentials.username, credentials.password, credentials.passwordConfirm]);

	const testPost = async (token: string) => {
		const title = {
			title: 'hello from client side',
		};

		const category = await axios.post(`${baseUrl}/category`, title, {
			headers: { Authorization: `Bearer ${token}` },
		});
		console.log('after post category', category.data);
	};

	const postRegister = async (credentials: Credentials) => {
		const response = await axios.post(`${baseUrl}/auth/register`, credentials, {
			withCredentials: false,
		});

		const token = response.data.token;

		console.log('token', token);

		testPost(token);
	};

	const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		postRegister(credentials);
		setCredentials(initialRegisterState);
	};

	return (
		<form className='form' onSubmit={(e) => handleRegisterSubmit(e)}>
			<h1 className='form__title'>Register</h1>
			<div className='form__block'>
				<label htmlFor='email' className='form__block-label'>
					Username
				</label>
				<input
					className='form__block-input'
					type='text'
					name='username'
					value={credentials.username}
					onChange={(e) =>
						setCredentials({ ...credentials, [e.target.name]: e.target.value })
					}
					id='email'
					placeholder='Your  Email'
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
					value={credentials.password}
					onChange={(e) =>
						setCredentials({ ...credentials, [e.target.name]: e.target.value })
					}
					id='password'
					placeholder='Your  Password'
				/>
			</div>
			<div className='form__block'>
				<label className='form__block-label' htmlFor='passwordConfirm'>
					Confirm Password
				</label>
				<input
					className='form__block-input'
					type='text'
					name='passwordConfirm'
					value={credentials.passwordConfirm}
					onChange={(e) =>
						setCredentials({ ...credentials, [e.target.name]: e.target.value })
					}
					id='passwordConfirm'
					placeholder='Confirm Your Password'
				/>
			</div>
			<small className='form__link-small' onClick={() => setFormType('login')}>
				Already have an account ? - Login
			</small>

			<button type='submit' className='btn form__btn ' disabled={disabled}>
				REGISTER
			</button>
		</form>
	);
};
