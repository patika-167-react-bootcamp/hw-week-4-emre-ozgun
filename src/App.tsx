import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { CategoryPage } from './pages/CategoryPage';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path={'/auth'}>
					<LoginPage />
				</Route>
				<Route path={'/categories'}>
					<CategoryPage />
				</Route>
			</Switch>
		</>
	);
}

export default App;
