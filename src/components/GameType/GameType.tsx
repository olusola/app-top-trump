import React from 'react'
import Button from '../../shared/Button/Button'

interface Props {
    handleSelectedGameType: (param?: any) => void
}

const GameType: React.FC<Props> = ({handleSelectedGameType}) => {
    return (
        <div className="d-flex justify-content-center">
            <Button label="Player" handleClick={() => handleSelectedGameType('player')}/>
            <Button label="Starships" handleClick={() => handleSelectedGameType('starship')}/>
        </div>
    )
}

export default GameType
