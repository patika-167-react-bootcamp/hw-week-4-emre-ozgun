import React, { useContext } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { getToken } from '../../utils/getToken';

export const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const { id } = getToken();

	const handleLogout = () => {
		localStorage.clear();
		setIsAuth?.(false);
	};

	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='nav__list'>
					{isAuth ? (
						<li className='nav__list-item'>
							<NavLink
								onClick={() => handleLogout()}
								to='/auth'
								className='nav__list-link'
								activeClassName='is-active'
							>
								Logout {`(${id})`}
							</NavLink>
						</li>
					) : (
						<NavLink
							to='/auth'
							className='nav__list-link'
							activeClassName='is-active'
						>
							Login
						</NavLink>
					)}
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
