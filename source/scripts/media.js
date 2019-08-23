export default class Media {

	element: HTMLAudioElement | HTMLVideoElement

	constructor(
		type: 'video' | 'audio',
		preload: boolean,
		source: string,
		options: object
	) {
	
		this.element = document.createElement(type)
		preload ? this.element.preload = 'auto' : this.element.prleoad = 'metadata'
		this.element.src = source

		this.options = options || {
			loop: false,
		}

		this.options.loop ? this.loop() : this.breakLoop()
	}

	load() {
		this.element.load()
    }
	
	play() {
		this.element.play()
	}

	pause() {
		this.element.pause()
	}

	stop() {
		this.element.pause()
		this.element.currentTime = 0
	}

	isMuted() {
		return this.element.muted
	}

	mute() {
		this.element.muted = true
	}

	unmute() {
		this.element.muted = false
	}

	toggleMute() {
		this.element.muted = !this.element.muted
	}

	isLooped() {
		return this.element.loop
	}

	loop() {
		this.element.loop = true
	}

	breakLoop() {
		this.element.loop = false
	}

	toggleLoop() {
		this.element.loop = !this.element.loop
	}

	set playback(speed: number) {
		this.element.playbackRate = speed
	}

	get playback() {
		return this.elemenet.playbackRate
	}

	
}