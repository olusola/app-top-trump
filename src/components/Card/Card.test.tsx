import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('card component', () => {
    let wrapper: any

    beforeEach( () => {
        const card = {
                id: '1',
                name: 'demo A',
                crew: 1,
                passengers: 4,
                length: 44,
                hyperdriveRating: 23
        }
        
        const renderProps = {
            winnerData: [card],
            cardData: card,
            index: 2
        }

        wrapper = shallow(<Card {...renderProps}/>)
    })

    it('should render card component when props are provided', () => {
        expect(wrapper.find('StyledCard').length).toBe(1)        
    })
})