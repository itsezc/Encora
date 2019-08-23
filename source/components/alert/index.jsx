import React, { Component } from 'react'

type Props = {
	background?: string,
	color?: string
}

export default class Alert extends Component<Props, Props> {

	state = {
		background: this.props.background,
		color: this.props.color
	}

	constructor(props: Props) {
		super(props)
	}

	render() {

		const color: string = this.state.color ? this.state.color : 'white'
		const background: string = this.state.background ? this.state.background : 'blue'
		const classes: string = `${background} alert with ${color} text`

		return(
			<div className={classes}>
				{this.props.children}
			</div>
		)
	}

}