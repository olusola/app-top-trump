import React from 'react'
import { mount } from 'enzyme'
import PlayerContainer from './PlayerContainer';
import { createStore, combineReducers } from 'redux';
import rootReducer from '../../reduxStore/historyReducer';
import dataReducer from '../../reduxStore/gameReducer'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/style';
import { MockedProvider } from '@apollo/client/testing';
import { act } from '@testing-library/react';
import { GET_PLAYERS } from '../../graphql/queries';

describe('Player Container', () => {
    let wrapper: any

    const mocks = [
        {
        request: {
            query: GET_PLAYERS,
        },
        result: {
            data: {
                allPersons: [
                    {
                        id:'dcdc',
                        name: 'demo',
                        mass: 3,
                        height: 2,
                        gender: 'female',
                    }
                ]
            },
            },
        },
    ]
    
    const root = combineReducers({
        data: dataReducer,
        history: rootReducer
    })

    const store = createStore(root)


    beforeEach(async ()=> {
        wrapper  = mount(
            <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                    <MockedProvider mocks={mocks} addTypename={false}>
                        <PlayerContainer/> 
                    </MockedProvider>
                </ThemeProvider> 
            </Provider>
        )
        await act(()=> new Promise(resolve => setTimeout(resolve, 0)))
    })

    it('should render playercards given all props', ()=> {
        expect(wrapper.find('PlayerCard').length).toBe(2)
    })

})