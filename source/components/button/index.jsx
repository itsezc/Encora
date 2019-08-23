import React, { Component } from 'react'

type Props = {
	background?: string,
	color?: string,
	text?: string
}

export default class Button extends Component<Props> {

	constructor(props: Props) {
		super(props)
	}

	render() {

		const color: string = this.props.color ? this.props.color : 'white'
		const background: string = this.props.background ? this.props.background : 'blue'
		const classes: string = `${background} button with ${color} text`

		return(
			<a className={classes}>
				{this.props.text}
			</a>
		)
	}

}