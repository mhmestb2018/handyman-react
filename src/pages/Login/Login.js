import React from 'react'

import Signin from '../../components/Signin/Signin'

import './Login.scss'

export default function Login() {
	return (
		<section className='section'>
			<h2 className='section-title'>Sign In</h2>
			<Signin />
		</section>
	)
}
