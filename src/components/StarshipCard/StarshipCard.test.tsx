import React from 'react'
import { shallow } from 'enzyme'
import StarshipCard from './StarshipCard'

describe('playercard component', () => {
    let wrapper: any

    beforeEach( () => {
        const card = {
            id: 'de4frf',
            name: 'demo',
            crew: 3,
            passengers: 2,
            length: 2,
            hyperdriveRating: 5
        }
        
        const renderProps = {
            cardData: card,
            index: 2
        }

        wrapper = shallow(<StarshipCard {...renderProps}/>)
    })

    it('should render card component when props are provided', () => {
        expect(wrapper.find('StyledCard').length).toBe(1)        
    })
})