// @flow

import RRWeb from 'rrweb'

export default class Monitor {

	constructor(
		private tick: ICoreTick,
		private detection: IDetection,
		private apiEndpoint: string,
		private monitors: IMonitorOptions
	) {

		/** If monitors aren't defined */
		if (!monitors) {
			this.monitors = [
				'screen'
			]
		}


		if (this.monitors.include('screen')) {
			this.monitorScreen()
		}
	}

	protected monitorScreen(): void {

		this.screenMonitorEvents = []

		if(this.startScreenRecording()) {
			this.tick.addEvent(this.saveScreenState, 10, 'seconds')
		}

	}

	protected startScreenRecording(): void {

		if (this.detection.hasMutationObserve()) {
			RRWeb.record({
				emit(e) => {
					this.screenMonitorEvents.push(e)
				}
			})
		} else {
			return false
		}

	}


	protected saveScreenState(): void {

		const body = JSON.stringify({ events })

		this.screenMonitorEvents = []

		if (this.detection.fetch()) {

			fetch(this.apiEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body
			})

		}
	}

}