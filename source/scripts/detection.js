// @flow

import Modernizr from 'modernizr'

export default class Detection {
	
	hasFlash(): boolean {
		return Modernizr.flash
	}

	hasCanvas(): boolean {
		return Modernizr.canvas
	}

	hasMutationObserve(): boolean {
		return Modernizr.mutationobserver
	}

	hasFetch(): boolean {
		return Modernizr.fetch
	}
}