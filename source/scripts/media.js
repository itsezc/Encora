//@flow

export default class Media {

	element: HTMLAudioElement | HTMLVideoElement
	options: Object

	constructor(
		type: 'video' | 'audio',
		source: string,
		options?: Object
	) {
	
		if (type === 'audio') {
			
			this.element = new Audio()

			if (this.element.canPlayType('audio/mpeg').length <= 0) {

				throw new console.error('Audio format is not supported by the browser')
		
			}

		} else {

			this.element = document.createElement('video')

			if (this.element.canPlayType('video/mp4').length <= 0) {

				throw new console.error('Video format is not supported by the browser')
			
			}

		}

		this.element.src = source

		this.options = options || {
			preload: true,
			loop: false,
			controls: true,
			autoplay: true,
			muted: false
		}

		this.options.preload ? this.element.preload = 'auto' : this.element.preload = 'metadata'
		this.element.autoplay = this.options.autoplay
		this.element.defaultMuted = this.options.muted

		this.options.controls ? this.controlsEnable() : this.controlsDisable()
		this.options.loop ? this.loop() : this.breakLoop()


		document.body.appendChild(this.element)
	}

	load(): void {
		this.element.load()
    }
	
	play(): void {
		this.element.play()
	}

	pause(): void {
		this.element.pause()
	}

	isPaused(): boolean {
		return this.element.paused
	}

	stop(): void {
		this.element.pause()
		this.element.currentTime = 0
	}

	isMuted() {
		return this.element.muted
	}

	mute(): void {
		this.element.muted = true
	}

	unmute(): void {
		this.element.muted = false
	}

	toggleMute(): void {
		this.element.muted = !this.element.muted
	}

	isLooped() {
		return this.element.loop
	}

	loop(): void {
		this.element.loop = true
	}

	breakLoop(): void {
		this.element.loop = false
	}

	toggleLoop(): void {
		this.element.loop = !this.element.loop
	}

	set playback(speed: number): void {
		this.element.playbackRate = speed
	}

	get playback() {
		return this.element.playbackRate
	}

	set volume(value: number): void {
		this.element.volume = value
	}

	get volume(): number {
		return this.element.volume
	}

	controlsEnable(): void {
		this.element.controls = true
	}

	controlsDisable(): void {
		this.element.controls = false
	}

	get currentTime(): number {
		return this.element.currentTime
	}

	set currentTime(time: number) {
		this.element.currentTime = time
	}

	get duration() {
		return this.element.duration
	}

	ended(): boolean {
		return this.element.ended
	}
}