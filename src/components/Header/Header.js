import React from 'react'

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/utils'
import Hero from '../Hero/Hero'

import './Header.scss'

const Header = ({ children }) => {
	return (
		<header className='header'>
			{children} <Hero />
		</header>
	)
}

Header.defaultProps = {
	currentUser: null,
}

export default Header
