// @flow

import * as React from 'React'
export default class Progress extends React.Component <IProgress> {
	render(): React.Node {
		return(

			<progress
				value={this.props.current}
				max={this.props.maximum}
			></progress>
			
		)
	}
}