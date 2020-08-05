import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { HistoryState } from '../../helper/constants'
import { useSelector, shallowEqual } from 'react-redux'

const HistoryContainer: FC = () => {
    const getHistory = useSelector((state: HistoryState) => state.history, shallowEqual)

    const history = useHistory()
    
    const goToHome = () => {
        history.push({
            pathname: '/'
        })
    }

    return (
        <div className="container">
            <hr/>
            <div className="d-flex justify-content-between">
                <h3>History</h3>
                <h3 onClick={goToHome}>Back</h3>
            </div>
            <hr/>
            <div>
                {
                    getHistory.length && (

                    getHistory.map(({cards, winners}, i) => (
                        <div key={i}>
                            <div className="d-flex justify-content-between">
                                {
                                    // winners.length === 1 && <h6>Winner is: {winners}</h6>
                                }
                            </div>
                            <div className="row">
                                {
                                    cards.map((card, i) => (
                                        <div key={card.id + 1} className="col-md-6">
                                            <h6>Card: {i + 1}</h6>
                                            <h6>Name: {card.name}</h6>
                                        </div>
                                    ))
                                }
                            </div>
                            <hr/>
                        </div>
                    ))
                    )}
            </div>
        </div>
    )
}

export default HistoryContainer
