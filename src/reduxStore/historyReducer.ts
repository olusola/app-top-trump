// import { HistoryState } from '../helper/constants';

const init = {
        history: []
}

const historyReducer = ((state = init, action:any) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return {
                    history: [
                        ...state.history,
                        action.pay
                    ]
            }
        default:
            return state
    }
})

export default historyReducer