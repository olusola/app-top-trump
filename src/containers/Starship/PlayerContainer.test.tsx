import React from 'react'
import { shallow, mount } from 'enzyme'
import PlayerContainer from './StarshipContainer';
import { createStore } from 'redux';
import rootReducer from '../../reduxStore/gameReducer';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/style';
import { MockedProvider } from '@apollo/client/testing';
// import GameContainer from '../Game/GameContainer';
import { act } from '@testing-library/react';
import { GET_PLAYERS } from '../../graphql/queries';

describe('Player Container', () => {
    let wrapper: any
    let renderProps: {
    }
    const mocks = [
        {
        request: {
            query: GET_PLAYERS,
        },
        result: {
            data: {
                allStarships: [
                    {
                        id:1,
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
    const store = createStore(rootReducer)
        // it('', ()=> {
    // })

    beforeEach(async ()=> {
        wrapper  = shallow(
            <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                    <MockedProvider mocks={mocks} addTypename={false}>
                        <PlayerContainer {...renderProps}/> 
                    </MockedProvider>
                </ThemeProvider> 
            </Provider>
        )
        await act(()=> new Promise(resolve => setTimeout(resolve, 0)))
    })

    xit('should render player container given all props', ()=> {
        // expect(wrapper.find('div').length).toBe(1)
        console.log(wrapper.debug());
    })

})