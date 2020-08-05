import React from 'react'
import { shallow } from 'enzyme'
import PlayerCard from './PlayerCard'

describe('playercard component', () => {
    let wrapper: any

    beforeEach( () => {
        const card = {
            id: 'gh76yg',
            name: 'demo',
            mass: 3,
            height: 2,
            gender: 'male',
        }
        
        const renderProps = {
            cardData: card,
            index: 2
        }

        wrapper = shallow(<PlayerCard {...renderProps}/>)
    })

    it('should render card component when props are provided', () => {
        expect(wrapper.find('StyledCard').length).toBe(1)        
    })
})