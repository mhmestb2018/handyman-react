import React, { useState } from 'react'

import Button from '../UI/Button/Button'
import SearchInput from '../UI/SearchInput/SearchInput'

import './Hero.scss'

export default function Hero({ children }) {
	const [inputValue, setInputValue] = useState('')

	const handleChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<section className='hero'>
			<div className='banner'>
				<h1>Find top-rated, pros for your project in your area</h1>
				<form onSubmit={handleSubmit}>
					<div className='search-input-wrap'>
						<SearchInput
							type='text'
							name='search'
							id='search'
							className='search-input'
							placeholder='E.g. Burlington'
							value={inputValue}
							onChange={handleChange}
						/>
						<Button className='search-button' type='submit'>
							Find Pros
						</Button>
					</div>
				</form>
			</div>
		</section>
	)
}
