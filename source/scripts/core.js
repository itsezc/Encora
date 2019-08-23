// @flow

import Handsontable from 'handsontable'
import Detection from './detection'

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

	public Spreadsheet: Handsontable

	consturctor(
		private options: IOptions
	) {
		this.tick = []
		this.Spreadsheet = Handsontable
	}

	request(
		endpoint: string,
		method: 'POST', 'GET',
		type: string,
		body: any,
	): any | mull {

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
				xhr.onreadystatechange = () => {
					if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

						// Health check for request						

					}
				}

				xhr.send(body)
			
			} else {
				
				return false

			}

		}
	}

}