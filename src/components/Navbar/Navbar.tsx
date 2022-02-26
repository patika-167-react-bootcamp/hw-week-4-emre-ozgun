import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__list-item'>
						<NavLink
							to='/auth'
							className='nav__list-link'
							activeClassName='is-active'
						>
							Login
						</NavLink>
					</li>
					<li className='nav__list-item'>
						<NavLink
							to='/categories'
							className='nav__list-link'
							activeClassName='is-active'
						>
							Categories
						</NavLink>
					</li>
					<li className='nav__list-item'>
						<NavLink
							to='/todos'
							className='nav__list-link'
							activeClassName='is-active'
						>
							Todos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
