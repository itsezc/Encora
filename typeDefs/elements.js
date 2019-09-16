type IButton = {
	background?: string,
	color?: string,
	text: string
}

type IAlert = {
	background?: string,
	color?: string,
	message: string,
	closeable?: boolean
}

type IProgress = {
	current?: number,
	maximum: number
}