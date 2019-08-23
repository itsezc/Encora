// @flow

import RRWeb from 'rrweb'

export default class Monitor {

	tick: any
	monitors: any
	screenMonitorEvents: any[]
	detection: any
	apiEndpoint: string

	constructor(
		tick: any,
		detection: any,
		apiEndpoint: string,
		monitors: any
	) {

		this.detection = detection

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

	monitorScreen(): void {

		this.screenMonitorEvents = []

		if(this.startScreenRecording()) {
			this.tick.addEvent(this.sendScreenState, 10, 'seconds')
		}

	}

	startScreenRecording(): void | false {

		if (this.detection.hasMutationObserve()) {
			RRWeb.record({
				emit(e) {
					this.screenMonitorEvents.push(e)
				}
			})
		} else {
			return false
		}

	}

	/**
		Send screen state to remote server
	*/
	sendScreenState() {

		const body = JSON.stringify(this.screenMonitorEvents)

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