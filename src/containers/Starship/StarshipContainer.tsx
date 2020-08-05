import React, { FC, useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StarshipType, GameState } from '../../helper/constants'
import { getNrandomCards, compareHyperDrive } from '../../helper/helper'
import StarshipCard from '../../components/StarshipCard/StarshipCard'

const StarshipContainer: FC<{}> = () => {
    const dispatch = useDispatch()
    const getStarshipsFromStore = useSelector((state: GameState) => state.game.starships)
    const [NoOfPlayers] = useState<number>(2)
    const [selectedCards, updateSelectedCards] = useState<StarshipType[]>([])

    useEffect(() => {
        const randomCards = getNrandomCards(NoOfPlayers, getStarshipsFromStore && getStarshipsFromStore[0])
        updateSelectedCards(randomCards)
    }, [NoOfPlayers, getStarshipsFromStore])

    const getWinner = useCallback(
        () => {
            let winnerData
            if (selectedCards[0] !== undefined) {
                const card = compareHyperDrive(selectedCards)
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
                    selectedCards.map((starship: StarshipType, i: number) => {
                            return (
                                <StarshipCard 
                                    key={i} 
                                    cardData={starship} 
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

export default StarshipContainer
