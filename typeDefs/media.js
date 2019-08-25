export type IMediaProps = {
	type: 'audio' | 'video',
	poster?: string,
	source: string,
	autoplay: boolean,
	preload: 'auto' | 'metadata' | 'none',
	controls: boolean,
	loop: boolean,
	muted: boolean,
	event?: string
}

export type IMediaState = {
	event: string | null
}