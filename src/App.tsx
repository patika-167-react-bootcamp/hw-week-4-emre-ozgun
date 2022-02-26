import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { CategoryPage } from './pages/CategoryPage';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

type LoginCredentials = {
	username: string;
	password: string;
};

type RegisterCredentials = {
	username: string;
	password: string;
	passwordConfirm: string;
};

const mockAuth: LoginCredentials = {
	username: 'testuser',
	password: 'test123',
};

const initialRegisterState: RegisterCredentials = {
	username: '',
	password: '',
	passwordConfirm: '',
};

const initialLoginState: LoginCredentials = {
	username: '',
	password: '',
};

function App() {
	const [registerCredentials, setRegisterCredentials] = useState(
		initialRegisterState as RegisterCredentials
	);
	const [loginCredentials, setLoginCredentials] = useState(
		initialLoginState as LoginCredentials
	);
	const [isAuth, setIsAuth] = useState(false);

	const checkIsLoggedIn = (
		credentials: RegisterCredentials | LoginCredentials
	): void => {
		//check if the provided credentials match
		//setIsAuth accordingly
		//if isAuth -> redirect to categories
		//else -> clear the form and reask
	};

	return (
		<>
			<Navbar />
			<Switch>
				<Route path={'/auth'} exact>
					<AuthPage />
				</Route>
				<Route path={'/categories'} exact>
					<CategoryPage />
				</Route>
			</Switch>
		</>
	);
}

export default App;
