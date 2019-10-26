// @flow

import * as React from 'react'
import styled from 'styled-components'

import { device } from '../../mediaQuery'

type IProps = {
    
    background?: string,

    children?: React.Node

}

const Section = (props: IProps) => {

    const Section = styled.section`
        background-color: ${props.background || '#1e375a'};
        width: 100%;
        color: white;

        @media ${device.tablet} {
            padding: 50px 0;
        }

        @media ${device.laptop} {
            padding: 80px 0;
        }
    `

    return(
        <Section>
            {props.children}
        </Section>
    )
}

export default Section