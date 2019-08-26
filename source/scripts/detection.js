// @flow

export default class Detection {

	static hasFlash(): boolean {

		let support = false

		// IE
		if ('ActiveXObject' in window) {

			try {

				// $FlowFixMe
				support = !!(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'))

			} catch(e) {

				support = false
				
			}

		} else {

			support = !!navigator.mimeTypes['application/x-shockwave-flash']

		}

		return support
	}

	static hasCanvas(): boolean {
		const canvas = document.createElement('canvas')
		return canvas.getContext ? true : false
	}

	static hasMutationObserve(): boolean {

		return window.MutationObserver ? true : false

	}

	static hasFetch(): boolean {
		
		return window.fetch ? true : false

	}

	static hasXHR(): boolean {
		// $FlowFixMe
		return window.XMLHttpRequest ? true : new ActiveXObject('Microsoft.XMLHTTP')
	}

}