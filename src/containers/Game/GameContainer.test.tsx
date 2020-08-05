import React from 'react'
import { mount } from 'enzyme'
import { act } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'
import { GET_STARSHIPS, GET_PLAYERS } from '../../graphql/queries'

import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../styles/style'
import  GameContainer from './GameContainer'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import rootReducer from '../../reduxStore/historyReducer'
import dataReducer from '../../reduxStore/gameReducer'

describe('GameContainer', () => {
    let wrapper: any
    const playerMock =   {
        request: {
            query: GET_PLAYERS,
        },
        result: {
            data: {
                allPersons: [
                    {
                        id:1,
                        name: 'demo',
                        mass: 3,
                        height: 2,
                        gender: 2,
                    }
                ]
            },
            },
        }
    const starshipMock = {
        request: {
            query: GET_STARSHIPS,
        },
        result: {
            data: {
                allStarships: [
                    {
                        id:1,
                        name: 'demo',
                        crew: 3,
                        passengers: 2,
                        length: 2,
                        hyperdriveRating: 5
                    }
                ]
            }
        }
    }

    const mocks = [
        starshipMock, playerMock
    ]

    const root = combineReducers({
        data: dataReducer,
        history: rootReducer
    })

    const store = createStore(root)

    beforeEach (async () => {
        const renderProps = {
        }

        wrapper  = mount(
            <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                    <MockedProvider mocks={mocks} addTypename={false}>
                        <GameContainer {...renderProps}/> 
                    </MockedProvider>
                </ThemeProvider> 
            </Provider>
        )
        await act(()=> new Promise(resolve => setTimeout(resolve, 0)))
    })

    it('should render container with required wrappers ', () => {
        expect(wrapper.find('section').length).toBe(1)
    })

    it('should display 2 random cards when gametype is selected', async () => {
        expect(wrapper.find('StyledCard').length).toBe(0)
        wrapper.find('Button').at(0).simulate('click')
        expect(wrapper.find('StyledCard').length).toBe(2)
    })
})