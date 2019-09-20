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

	circular: boolean,

	children?: React.Node
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
		circular
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

	const Button = styled.button`
		background-color: ${background};
		color: ${color};
		border-radius: ${rounded};
		padding: 14px;
		width: ${width};
		height: ${width};
		font-size: 15px;
		font-weight: ${props => bold ? '700' : '400'};
		text-transform: ${props => uppercase ? 'uppercase' : 'none'};
		text-decoration: ${props => underline ? 'underline' : 'none'};
		outline: none;
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