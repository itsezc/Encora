import React, { Component } from 'react'

type Props = {
	background?: string,
	color?: string
}

export default class Alert extends Component<Props> {

	constructor(props: Props) {
		super(props)
	}

	render() {

		const color: string = this.props.color ? this.props.color : 'white'
		const background: string = this.props.background ? this.props.background : 'blue'
		const classes: string = `${background} alert with ${color} text`

		return(
			<div className={classes}>
				{this.props.children}
			</div>
		)
	}

}