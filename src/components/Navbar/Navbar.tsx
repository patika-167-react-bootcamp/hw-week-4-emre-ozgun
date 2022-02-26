import React from 'react';

import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__list-item'>
						<Link to='/login'>Login</Link>
					</li>
					<li className='nav__list-item'>
						<Link to='/categories'>Categories</Link>
					</li>
					<li className='nav__list-item'>
						<Link to='/todos'>Todos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
