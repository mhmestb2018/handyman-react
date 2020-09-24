import React from 'react'

const SearchInput = ({ children, ...otherProps }) => {
	return <input {...otherProps}>{children}</input>
}

export default SearchInput
