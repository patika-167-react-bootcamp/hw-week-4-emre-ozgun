import React, { useState } from 'react';
// import user from '../mockAuth/authenticatedUser.json';
// import { useHistory } from 'react-router-dom';
import { LoginForm } from '../components/UserForms/LoginForm';
import { RegisterForm } from '../components/UserForms/RegisterForm';

type Props = {
	formType: 'login' | 'register';
	setFormType: React.Dispatch<React.SetStateAction<'login' | 'register'>>;
};

export const AuthPage = ({ formType, setFormType }: Props) => {
	return (
		<main className='container'>
			<section className='section'>
				{formType === 'login' ? (
					<LoginForm setFormType={setFormType} />
				) : (
					<RegisterForm setFormType={setFormType} />
				)}
			</section>
		</main>
	);
};
