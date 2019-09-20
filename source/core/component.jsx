// @flow

import * as React from 'react'

const Component = (props: any) => {

	const Tag = props.tag
	delete props.tag

	const { describe } = props
	delete props.style
	delete props.className

	
	return(
		<Tag
			{...props}
		/>	
	)
}

export default Component