import React, { FC, useState, useEffect, useCallback } from 'react'
import { PlayerType, GameState } from '../../helper/constants'
import { getNrandomCards, comparePlayer } from '../../helper/helper'
import PlayerCard from '../../components/PlayerCard/PlayerCard'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

const PlayerContainer: FC<{}> = () => {
    const dispatch = useDispatch()
    const getPlayersFromStore = useSelector((state: GameState) => state.game.players, shallowEqual)
    const [NoOfPlayers] = useState<number>(2)
    const [selectedCards, updateSelectedCards] = useState<PlayerType[]>([])

    useEffect(() => {
        const randomCards = getNrandomCards(NoOfPlayers, getPlayersFromStore && getPlayersFromStore[0])
        updateSelectedCards(randomCards)
    }, [NoOfPlayers, getPlayersFromStore])

    const getWinner = useCallback(
        () => {
            let winnerData
            if (selectedCards[0] !== undefined) {
                const card = comparePlayer(selectedCards)
                winnerData = card && card[0]
            }
            return winnerData
        },
        [selectedCards],
    )

    const archive = {
        winners: getWinner(),
        cards: [...selectedCards]
    }
            
    const pushToHistory = useCallback(
        () => {
            if (getWinner()) {
                dispatch({type: 'SET_HISTORY',pay: archive})
            }
        },
        [archive, dispatch, getWinner],
    )
    
    useEffect(() => {
        pushToHistory()
    }, [pushToHistory])

    return (
        <div>
            <div className="row">
                {
                    selectedCards.map((player:PlayerType, i: number) => {
                            return (
                                <PlayerCard 
                                    key={i} 
                                    cardData={player} 
                                    index={i}
                                />
                            )
                        }
                    ) 
                }
            
            </div>
            <h2 className="pull-center">
                Winner: {getWinner()?.name}
            </h2>
        </div>
    )
}

export default PlayerContainer
