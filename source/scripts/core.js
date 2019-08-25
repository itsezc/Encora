// @flow

import Detection from './detection'

import Animate from './animate'
import Game from 'phaser'

interface IOptions {
	features: any[]
}

/**
	Example Options:

	{
		features: [
			{
				name: 'monitor',
				params: [
					'screen',
				],
			}
		]
	}

 */

export default class Core {

	tick: any

	consturctor(
		options: IOptions
	) {
		this.tick = []
	}

	request(
		endpoint: string,
		method: 'POST' | 'GET',
		type: string,
		body: any,
	): any | null {

		if (Detection.hasFetch()) {

			let result = fetch(endpoint, {
				method,
				headers: {
					'Content-Type': type,
				},
				body
			})

		} else {

			/** @FALLBACK : fall back to XHR if fetch is unavailable */

			if (Detection.hasXHR()) {

				let xhr = new XMLHttpRequest()
				xhr.open(method, endpoint, true)
				xhr.setRequestHeader('Content-Type', type)
				xhr.send(body)
			
			} else {
				
				return false

			}

		}
	}

}

export {
	Animate,
	Game
}