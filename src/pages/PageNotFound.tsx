import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';

export const PageNotFound = () => {
	const history = useHistory();

	const { isAuth } = React.useContext(AuthContext);

	const [message, setMessage] = useState(`Page not found, redirecting}...`);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			history.push(`/${isAuth ? 'categories' : 'auth'}`);
		}, 3000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<main className='container'>
			<section className='section'>
				<p>{message}</p>
			</section>
		</main>
	);
};
