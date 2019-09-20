// @flow

import * as React from 'react'
import styled from 'styled-components'

type IProps = {
	/** Font casing of the button */
	uppercase?: boolean,
	/** Font styling thickness of the button */
	bold?: boolean,
	/** Rounded border (with a number value - optional) of the button */
	rounded?: boolean | number,
	/** Background image or color (name, hex, rgb, rgba, hsl) of the button */
	background?: string,
	/** Font color of the button */
	color?: string,
	/** Width in number (in pixels) or 'fluid' */
	width?: string | number,
	/** Underline font of the button */
	underline?: boolean
}

/**
	* A Button indicates a possible user action
	*
	* @version 1.0.0
	* @author [Chiru B](https://github.com/itsezc) of [Foretag](https://foretag.co]) Inc.
*/
const Button = (props: IProps) => {

	const { 
		background, 
		color,
		uppercase,
		bold,
		underline
	} = props

	let { 
		rounded,
		width
	} = props

	rounded ? (
		(typeof rounded === 'boolean') ? (
			rounded = '4px'
		) :
			rounded = rounded.toString().concat('px')
	) : null

	width ? (
		(typeof width === 'number') ? (
			width = width.toString().concat('px')
		) : (
			width === 'fluid' ?
				width = '100%'
			:
				null
		)
	) : null

	const Button = styled.button`
		background-color: ${background};
		color: ${color};
		border-radius: ${rounded};
		padding: 22px 14px;
		width: ${width};
		font-size: 15px;
		font-weight: ${props => bold ? '700' : '400'};
		text-transform: ${props => uppercase ? 'uppercase' : 'none'};
		text-decoration: ${props => underline ? 'underline' : 'none'};
		outline: none;
	`

	return(
		<Button>xD</Button>
	)
}

Button.defaultProps = {
	uppercase: false,
	underline: false,
	bold: false,
	background: 'blue',
	color: 'white',
	rounded: false
}

export default Button