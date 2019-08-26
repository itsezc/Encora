// @flow

import * as React from 'react'
export default class Button extends React.Component <IButton> {
	render(): React.Node {

		return(
			<a className={`${this.props.background || 'gray'} button with ${this.props.color || 'white'} text`}>
				{this.props.text}
			</a>
		)

	}
}