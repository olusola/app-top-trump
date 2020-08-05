import React from 'react'
import styled from 'styled-components'

interface Props {
    label: string;
    value: any;
}

const StyledBanner = styled.div`
color: ${props => props.theme.text.primary};
    font-size: 20px;
    padding: 0.5rem;
    display: inline-block;
    margin: 10px;
    text-transform: Capitalize;
`
StyledBanner.displayName = 'StyledBanner'

const Banner: React.FC<Props> = ({label, value}) => {
    return (
    <StyledBanner>{label} : {value}</StyledBanner>
    )
}

export default Banner
