import React from 'react'
import styled from 'styled-components'

interface Props {
    label: string;
    handleClick: (param?: any) => void;
}

const StyledButton = styled.div`
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.8rem;
    font-weight: 600;
    border-radius: 10px;
    display: inline-block;
    margin: 15px;
    text-transform: Capitalize;
`
StyledButton.displayName = 'Button'

const Button: React.FC<Props> = ({handleClick, label}) => {
    return (
        <StyledButton onClick={handleClick}>{label}</StyledButton>
        
    )
}

export default Button
