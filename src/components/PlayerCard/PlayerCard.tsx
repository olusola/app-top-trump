import React, { FC } from 'react'
import styled from 'styled-components'
import { PlayerType } from '../../helper/constants'

type ItemType = {
    label: string;
    value: any;
}

interface Props {
    cardData: PlayerType;
    index: number;
}

const StyledCardWrapper = styled.div`
    background-color: ${props => props.theme.background.secondary};
    padding: 20px;
    border-radius: 15px;
    margin: 10px 0;

`
StyledCardWrapper.displayName = 'StyledCard'

const StyledItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`

const StyledCardItem = styled.div`
    color: ${props => props.theme.text.primary};
    font-weight: 500;
    font-size: 16px;
    text-transform: capitalize;
`

const Item: FC<ItemType> = ({label, value}) => {
    return (
        <StyledItemWrapper>
            <StyledCardItem>{label}</StyledCardItem>
            <StyledCardItem>{value}</StyledCardItem>
        </StyledItemWrapper>
    )
}

const PlayerCard: React.FC<Props> = ({cardData, index}) => {
    
    return (
        <div className="col-md col-xs-12 col-sm-6">
            <StyledCardWrapper>
                <Item label="card" value={index+1}/>
                <Item label="name" value={cardData&&cardData.name}/>
                <Item label="mass" value={cardData&&cardData.mass}/>
                <Item label="height" value={cardData&&cardData.height}/>
                <Item label="gender" value={cardData&&cardData.gender}/> 
            </StyledCardWrapper>
        </div>
    )
}

export default PlayerCard
