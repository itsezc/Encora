// @flow

import * as React from 'react'
import styled from 'styled-components'

const Segment = styled.div`
	position: relative;
	background-color: ${props => props.background ? props.background : '#ffffff' };
	box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
	border: 1px solid rgba(34,36,38,.15);
	padding: 1em 1em;
	border-radius: .28571429rem;
	font-family: ${props => props.font ? props.font : 'Fira Sans, sans-serif'};
`

export default Segment