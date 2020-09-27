import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

import Button from '../UI/Button/Button'
import FormInput from '../UI/FormInput/FormInput'

import './Signup.scss'

const Signup = () => {
	const history = useHistory()
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [errors, setErrors] = useState('')

	const resetForm = () => {
		setDisplayName('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')
		setErrors('')
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()
	}

	const configAuthWrapper = {
		headline: 'Registration',
	}

	return (
		<section className='section form-section'>
			{errors.length > 0 && (
				<ul>
					{errors.map((err, index) => {
						return (
							<li className='error-message' key={index}>
								{err}
							</li>
						)
					})}
				</ul>
			)}
			<form onSubmit={handleFormSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					placeholder='Full name'
					handleChange={(event) => setDisplayName(event.target.value)}
				/>

				<FormInput
					type='text'
					name='email'
					value={email}
					placeholder='Email'
					handleChange={(event) => setEmail(event.target.value)}
				/>

				<FormInput
					type='password'
					name='password'
					value={password}
					placeholder='
                            Password'
					handleChange={(event) => setPassword(event.target.value)}
				/>

				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					placeholder='Confirm Password'
					handleChange={(event) => setConfirmPassword(event.target.value)}
				/>

				<Button className='btn btn-login' type='submit'>
					Registration
				</Button>
			</form>
		</section>
	)
}

export default Signup
