// @flow

import * as React from 'react'
export default class Button extends React.Component <IButton> {
	render(): React.Node {

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