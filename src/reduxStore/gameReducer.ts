import { GameState } from '../helper/constants';

const init: GameState = {
    game: {
        players: [],
        starships: []
    }
}

const gameReducer = ((state: GameState = init, action:any):any => {
    switch (action.type) {
        case 'SET_PLAYERS_DATA':
            return {
                players: [
                    action.pay
                ]
            }
        case 'SET_STARSHIPS_DATA':
            return {
                starships: [
                    action.pay
                ]
            }
        default:
            return state
    }
})

export default gameReducer