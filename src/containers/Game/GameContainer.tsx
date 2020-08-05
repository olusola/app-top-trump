import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_PLAYERS, GET_STARSHIPS } from '../../graphql/queries'
import { useDispatch } from 'react-redux'

import GameType from '../../components/GameType/GameType'
import PlayerContainer from '../Player/PlayerContainer'
import StarshipContainer from '../Starship/StarshipContainer'
import Button from '../../shared/Button/Button'

const GameContainer: React.FC<{}> = () => {
    const dispatch = useDispatch()
    const [getPlayers, { data: playersData }] = useLazyQuery(GET_PLAYERS)
    const [getStarships, { data: starshipsData }] = useLazyQuery(GET_STARSHIPS);
    const [selectedGameType, setSelectedGameType] = useState<string>('')

    useEffect(() => {
        getPlayers()
    }, [getPlayers])


    useEffect(() => {
        getStarships()
    }, [getStarships])

    const handleSelectGameType = (val: string) => {
        if (val === 'player') {
            dispatch({type: 'SET_PLAYERS_DATA', pay: playersData})
        }

        if (val === 'starship') {
            dispatch({type: 'SET_STARSHIPS_DATA', pay: starshipsData})
        } 
        setSelectedGameType(val)
    }

    const handlePlayAgain = () => {
        setSelectedGameType('')
    }

    return (
        <section>
            {
                selectedGameType === '' ? (
                    <GameType handleSelectedGameType={handleSelectGameType} />
                ): null
            }
            {selectedGameType }
            <div>
                {
                    selectedGameType === 'player' && <PlayerContainer/>
                }
            </div>
            <div>
                {
                    selectedGameType === 'starship' && <StarshipContainer/>
                }
            </div>
            <div className="d-flex justify-content-center">
                {
                    selectedGameType !== '' &&(
                        <Button label="Play Again" handleClick={handlePlayAgain}/>
                    )
                }
            </div>
        </section>
    )
}
export default GameContainer