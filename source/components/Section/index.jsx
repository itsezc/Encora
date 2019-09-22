// @flow

import * as React from 'react'
import styled from 'styled-components'


type IProps = {
    
    background?: string,

    children?: React.Node
    
}

const Section = (props: IProps) => {

    const Section = styled.section`
        background-color: ${props.background || '#1e375a'};
        width: 100%;
        padding: 80px 0;
        color: white;
    `

    return(
        <Section>
            {props.children}
        </Section>
    )
}

export default Section