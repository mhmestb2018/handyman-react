import React from 'react'

import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

import { auth } from '../../firebase/utils'

import './Navigation.scss'

const Navigation = ({ currentUser }) => {
	return (
		<nav className='navigation'>
			<div className='navigation-wrap'>
				<Navbar expand='lg'>
					<Navbar.Brand href='#home'>Logo</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Link to='/'>Home</Link>
							<Link to='/about'>About</Link>
							<Link to='/products'>Products</Link>
						</Nav>

						<Nav className='ml-auto'>
							{currentUser && currentUser ? (
								<>
									<Link to='/dashboard'>My Account</Link>

									<Link to='/cart'>Cart</Link>
									<Link to='/'>
										<span className='log-out' onClick={() => auth.signOut()}>
											Logout
										</span>
									</Link>
								</>
							) : (
								<>
									<Link to='/login'>Login</Link>

									<Link to='/registration'>Registration</Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</nav>
	)
}

Navigation.defaultProps = {
	currentUser: null,
}

export default Navigation
