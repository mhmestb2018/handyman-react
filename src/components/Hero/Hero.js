import React from 'react'

import './Hero.scss'

export default function Hero({ children }) {
	return (
		<div className='hero'>
			<div className='banner'>
				<h1>He gets thing done</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
					suscipit minima sapiente aliquam pariatur nulla obcaecati libero illum
					laudantium distinctio earum quos ad debitis vero fuga corrupti unde
					numquam eligendi?
				</p>
				{children}
			</div>
		</div>
	)
}
