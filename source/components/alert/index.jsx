// @flow

import * as React from 'react'
export default class Alert extends React.Component <IAlert> {
	render(): React.Node {

		return(
			<div className={`${this.props.background || 'blue'} alert with ${this.props.color || 'white'} text`}>
				{this.props.message}
			</div>
		)

	}
}