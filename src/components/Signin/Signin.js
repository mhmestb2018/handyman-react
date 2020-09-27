import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { signInWithGoogle } from '../../firebase/utils'
// import { useDispatch, useSelector } from 'react-redux'

import Button from '../UI/Button/Button'
import FormInput from '../UI/FormInput/FormInput'

import './Signin.scss'

const Signin = () => {
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
	}

	const configAuthWrapper = {
		headline: 'Login',
	}

	return (
		<section className='section form-section'>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					value={email}
					placeholder='Email'
					handleChange={(event) => setEmail(event.target.value)}
				/>

				<FormInput
					type='password'
					name='password'
					value={password}
					placeholder='Password'
					handleChange={(event) => setPassword(event.target.value)}
				/>

				<Button className='btn btn-login' type='submit'>
					Login
				</Button>

				<div className='social-signin'>
					<div className='row'>
						<Button className='btn btn-login' onClick={signInWithGoogle}>
							Sign in with Google
						</Button>
					</div>
				</div>

				<div className='links'>
					<Link to='/recovery'>Reset Password</Link>
				</div>
			</form>
		</section>
	)
}

export default Signin
