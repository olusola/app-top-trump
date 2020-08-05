import { 
    getRandomItem, 
    getRandomCard, 
    getNrandomCards,
} from './helper'

describe('helper functions', () => {
    const mockArray = [1,2,3,4]
    const cards = {
        allStarships: [
            {
                id: '1',
                name: 'demo A',
                crew: 1
            },
            {
                id: '2',
                name: 'demo B',
                crew: 3
            }
        ]
    }

    describe('getRandomItem', () => {
        it('should return a random item when an array is provided', () => {
            expect( typeof getRandomItem(mockArray)).toBe('number')
        })
    })

    describe('getRandomCard', () => {
        it('should return a random card object when data is provided', () => {
            const card = getRandomCard(cards)
            expect(typeof card).toBe('object')
        })
    })

    describe('getNrandomCards', () => {
        it('should generate N cards from data(list of cards)', () => {
            const newCards = getNrandomCards(2, cards)
            expect(typeof newCards).toBe('object')
            expect(newCards.length).toBe(2)
        })
    })
})