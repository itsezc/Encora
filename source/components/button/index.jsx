// @flow

import * as React from 'react'
import styled from 'styled-components'

/**
* A button component is used for interactivity
*/
export default (props) => {

	const { 
		background, 
		color,
		uppercase,
		bold
	} = props

	let { 
		rounded,
		width
	} = props

	rounded ? (
		(typeof rounded === 'boolean') ? (
			rounded = '4px'
		) :
			rounded = rounded.concat('px')
	) : null

	width ? (
		(typeof width === 'number') ? (
			width = width.concat('px')
		) : (
			width === 'fluid' ?
				width = '100%'
			:
				null
		)
	) : null

	const Button = styled.button`
		background-color: ${ props => background ? background : 'blue' };
		color: ${ props => color ? color : 'white' };
		border-radius: ${rounded};
		padding: 22px 14px;
		width: ${width};
		font-size: 15px;
		font-weight: ${props => bold ? '700' : '400'}
		text-transform: ${ props => uppercase ? 'uppercase' : 'none'};
		outline: none;
	`

	return(
		<Button>xD</Button>
	)
}