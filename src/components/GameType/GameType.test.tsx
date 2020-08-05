import React from 'react'
import { shallow } from 'enzyme'
import  GameType from './GameType'

describe('GameContainer', () => {
    let wrapper: any
    let handleSelectedGameTypeSpy: any

    beforeEach(() => {
        handleSelectedGameTypeSpy = jest.fn()
        const renderProps = {
            handleSelectedGameType: handleSelectedGameTypeSpy,
        }
        wrapper  = shallow(<GameType {...renderProps}/>)
    })

    it('should render component ', () => {
        expect(wrapper.find('div').length).toBe(1)
    })

    it('should render player gametype button and simulate click', () => {
        const handleClick: () => void = wrapper.find('Button').at(0).prop('handleClick');
        handleClick();
        expect(handleSelectedGameTypeSpy).toHaveBeenCalledWith('player')
    })

    it('should render starship gametype button and simulate click', () => {
        const handleClick: () => void = wrapper.find('Button').at(1).prop('handleClick');
        handleClick();
        expect(handleSelectedGameTypeSpy).toHaveBeenCalledWith('starship')
    })
})