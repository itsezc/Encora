// @flow

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

	consturctor(
		private options: IOptions
	) {
		this.tick = []
	}
}