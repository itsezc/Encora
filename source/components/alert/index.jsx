// @flow

import * as React from 'react'
export default class Alert extends React.Component <IAlert> {
	render(): React.Node {

		const color: string = this.props.color ? this.props.color : 'white'
		const background: string = this.props.background ? this.props.background : 'blue'
		const classes: string = `${background} alert with ${color} text`

		return(
			<div className={classes}>
				{this.props.message}
			</div>
		)

	}
}