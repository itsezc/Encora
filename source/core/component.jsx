// @flow

import * as React from 'react'

const Component = (props) => {

	const { Tag } = props
	
	delete props.Tag
	
	return(
		<Tag
			{...props}
		/>	
	)
}

export default Component