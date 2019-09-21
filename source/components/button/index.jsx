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
	underline?: boolean,

	icon?: string,

	iconStyle?: string,

	circular: boolean,

	children?: React.Node,

	shadow?: string,

	spaced?: boolean,

	font?: string,
}

/**
	* A Button indicates a possible user action
	*
	* @version 1.0.0
	* @author [Chiru B](https://github.com/itsezc)
*/
const Button = (props: IProps) => {

	const { 
		background, 
		color,
		uppercase,
		bold,
		underline,
		icon,
		iconStyle,
		circular,
		spaced,
		font
	} = props

	let { 
		rounded,
		width,
		shadow
	} = props

	rounded ? (
		(typeof rounded === 'boolean') ? (
			rounded = '4px'
		) :
			rounded = rounded.toString().concat('px')
	) : null

	circular ? rounded = '100%' : null

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

	switch (shadow) {
		case 'stripe':
				shadow = '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)'
			break
	
		case 'spacious':
				shadow = '0 20px 40px 0 rgba(35,100,210,.2)'
			break

		default:
			break
	}

	const Button = styled.button`
		background-color: ${background};
		color: ${color};
		border-radius: ${rounded};
		padding: 14px;
		width: ${width};
		height: ${width};
		font-size: 15px;
		font-family: ${props => font ? font : 'Fira Sans, sans-serif'};
		font-weight: ${props => bold ? '700' : '400'};
		text-transform: ${props => uppercase ? 'uppercase' : 'none'};
		text-decoration: ${props => underline ? 'underline' : 'none'};
		letter-spacing: ${props => spaced ? '2px': 0};
		box-shadow: ${shadow};
		outline: none;
		cursor: pointer;
	`

	return(
		<Button>
			{
				icon ? 
					<i className={'ri-'.concat(icon)}></i>
						: 
					props.children
			}
		</Button>
	)
}

Button.defaultProps = {
	circular: false,
	uppercase: false,
	underline: false,
	bold: false,
	background: '#2364d2',
	color: 'white',
	rounded: false,
	children: 'button',
	icon: null
}

export default Button