// @flow

import * as React from 'React'
import { ArcGisMapServerImageryProvider } from 'cesium'
import { Viewer, ImageryLayer } from 'resium'

export default class Map extends React.Component {

	constructor(props: any): void {
		super(props)
	}

	render(): React.Node {
		return(

			<Viewer full>
				<ImageryLayer
					imageryProvider={new ArcGisMapServerImageryProvider({
						url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
					})} />
			</Viewer>
		
		)
	}

}
