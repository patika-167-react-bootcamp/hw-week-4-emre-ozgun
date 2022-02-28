import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { CategoryPage } from './pages/CategoryPage';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

type FormType = 'login' | 'register';

function App() {
	const [formType, setFormType] = useState('login' as FormType);

	return (
		<>
			<Navbar />
			<Switch>
				<Route path={'/auth'} exact>
					<AuthPage formType={formType} setFormType={setFormType} />
				</Route>
				<Route path={'/categories'} exact>
					<CategoryPage />
				</Route>
			</Switch>
		</>
	);
}

export default App;
