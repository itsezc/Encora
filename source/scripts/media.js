//@flow

import * as React from 'react'
export default class Media extends React.Component <IMediaOptions> {

	constructor(props: IMediaOptions) {
		super(props)		
	}

	render(): React.Node {

		if(this.props.type === 'video') {
			return(
				<video
					autoplay={this.props.preload}
					preload={this.props.preload}
					poster={this.props.poster}
					controls={this.props.controls}
					loop={this.props.loop}
					muted={this.props.muted}
				>
					<source src={this.props.source} type='video/mp4' />
				</video>
			)
		} else {
			return(
				<audio
					autoplay={this.props.autoplay}
					preload={this.props.preload}
					controls={this.props.controls}
					loop={this.props.loop}
					muted={this.props.muted}
				>
					<source src={this.props.source} type='audio/mpeg' />
				</audio>
			)
		}

	}
}

