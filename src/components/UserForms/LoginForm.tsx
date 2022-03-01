import React from 'react';
import './UserForm.css';
import { AuthContext } from '../../context/auth-context';
import axios from 'axios';

type Props = {
	setFormType: React.Dispatch<React.SetStateAction<'login' | 'register'>>;
};

export const LoginForm = ({ setFormType }: Props) => {
	console.log(process.env.REACT_APP_URL);

	return (
		<form className='form'>
			<h1 className='form__title'>Login</h1>

			<div className='form__block'>
				<label htmlFor='email' className='form__block-label'>
					Email
				</label>
				<input
					className='form__block-input'
					type='text'
					name='email'
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
					id='password'
					placeholder='Your  Password'
				/>
			</div>
			<small
				className='form__link-small'
				onClick={() => setFormType('register')}
			>
				Don't have an account ? - Register
			</small>

			<button type='submit' className='btn form__btn'>
				LOGIN
			</button>
		</form>
	);
};
