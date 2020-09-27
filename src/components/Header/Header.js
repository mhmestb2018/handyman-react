import React from 'react'

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/utils'

import './Header.scss'

const Header = ({ currentUser }) => {
	console.log(currentUser)
	return (
		<header className='header'>
			<nav className='nav-left'>
				<ul>
					<li>
						<img src='' alt='logo' className='logo' />
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
				</ul>
			</nav>

			<nav className='nav-right'>
				{currentUser && currentUser ? (
					<ul>
						<li>
							<Link to='/dashboard'>My Account</Link>
						</li>
						<li>
							<span className='log-out' onClick={() => auth.signOut()}>
								Logout
							</span>
						</li>
					</ul>
				) : (
					<ul>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/registration'>Registration</Link>
						</li>
					</ul>
				)}
			</nav>
		</header>
	)
}

Header.defaultProps = {
	currentUser: null,
}

export default Header
