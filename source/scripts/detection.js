// @flow

export default class Detection {

	static hasFlash(): boolean {

		if (navigator.plugins != null 
			&& navigator.plugins.length > 0) {

        	return navigator.plugins["Shockwave Flash"] && true

    	}

		else if (~navigator.userAgent.toLowerCase().indexOf('webtv')) {
			return true
		}

		else if (~navigator.appVersion.indexOf('MSIE') && !~navigator.userAgent.indexOf('Opera')) {

			try {

				// $FlowFixMe
				return new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && true

			} catch(e) {}

		}
    	
		return false
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
		return window.XMLHttpRequest ? true : false
	}

}