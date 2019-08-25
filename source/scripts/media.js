//@flow

import * as React from 'react'


export default class Media extends React.Component <IMediaOptions> {

	element: ?{ 
		current?: HTMLAudioElement | HTMLVideoElement | null
	} 

	constructor(props: IMediaOptions): void {
		super(props)

		this.element = React.createRef()
	}

	play(): void {
		if (this.element 
				&& this.element.current) {

			this.element.current.play()

		}
	}

	pause(): void {
		if (this.element 
				&& this.element.current) {

			this.element.current.pause()

		}
	}

	stop(): void {
		if (this.element 
				&& this.element.current) {
			
			this.element.current.pause()
			this.setCurrentTime(0)

		}
	}

	getCurrentTime(): number | false {
		if (this.element
				&& this.element.current) {
				
			return this.element.current.currentTime

		} else {

			return false
		
		} 
	}

	setCurrentTime(seconds: number): void {
		if (this.element 
				&& this.element.current) {

			this.element.current.currentTime = seconds

		}
	}

	render(): React.Node {

		if (this.props.type === 'video') {

			return(
				<video
					autoplay={this.props.preload}
					preload={this.props.preload}
					poster={this.props.poster}
					controls={this.props.controls}
					loop={this.props.loop}
					muted={this.props.muted}
					ref={video => (this.element = video)}
				>
					<source src={this.props.source} type='video/mp4' />
				</video>
			)

		} else if (this.props.type === 'audio') {

			return(
				<audio
					autoplay={this.props.autoplay}
					preload={this.props.preload}
					controls={this.props.controls}
					loop={this.props.loop}
					muted={this.props.muted}
					ref={audio => (this.element = audio)}
				>
					<source src={this.props.source} type='audio/mpeg' />
				</audio>
			)

		} else {

			throw new Error('Component is neither Audio nor Video')

		}

	}
}

