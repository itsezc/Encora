interface IMediaOptions {
	type: 'audio' | 'video',
	poster?: string,
	source: string,
	autoplay: boolean,
	preload: 'auto' | 'metadata' | 'none',
	controls: boolean,
	loop: boolean,
	muted: boolean
}