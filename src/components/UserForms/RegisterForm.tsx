import React from 'react';
import './UserForm.css';

type Props = {
	setFormType: React.Dispatch<React.SetStateAction<'login' | 'register'>>;
};

export const RegisterForm = ({ setFormType }: Props) => {
	return (
		<form className='form'>
			<h1 className='form__title'>Register</h1>
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
			<div className='form__block'>
				<label className='form__block-label' htmlFor='passwordConfirm'>
					Confirm Password
				</label>
				<input
					className='form__block-input'
					type='text'
					name='passwordConfirm'
					id='passwordConfirm'
					placeholder='Confirm Your Password'
				/>
			</div>
			<small className='form__link-small' onClick={() => setFormType('login')}>
				Already have an account ? - Login
			</small>

			<button type='submit' className='btn form__btn '>
				REGISTER
			</button>
		</form>
	);
};
