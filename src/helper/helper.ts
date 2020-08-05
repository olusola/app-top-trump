import { PlayerType, StarshipType } from "./constants"

export const getRandomItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)]

export const getRandomCard = (data:any) => {
        let cardData
        if (data && data.allStarships) {
                const arr = data && data.allStarships
                cardData = getRandomItem(arr)
        }
        if (data && data.allPersons) {
                const arr = data && data.allPersons
                cardData = getRandomItem(arr)
        }
        return cardData
}

export const getNrandomCards = (n: number, data: any) => {
        const nCards = Array.from({ length: n }, () => getRandomCard(data))
        return nCards
}

export const comparePlayer = (selectedCards: PlayerType[]) => {
        const sortedCards = [...selectedCards].sort((a, b) => b.height - a.height)
        const highestCard = sortedCards[0]
        const winners = sortedCards.filter((card: PlayerType) => card.height === highestCard.height)

        return winners
}

export const compareHyperDrive = (selectedCards: StarshipType[]) => {
        const sortedCards = [...selectedCards].sort((a, b) => b.hyperdriveRating - a.hyperdriveRating)
        const highestCard = sortedCards[0]
        const winners = sortedCards.filter((card: StarshipType) => card.hyperdriveRating === highestCard.hyperdriveRating)

        return winners
}
