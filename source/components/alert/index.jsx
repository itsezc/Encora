// @flow

import * as React from 'react'
export default class Alert extends React.Component <IAlert> {
	render(): React.Node {

		return(
			<a className={`${this.props.background || 'blue'} alert with ${this.props.color || 'white'} text`}>
				{this.props.message}
			</a>
		)

	}
}