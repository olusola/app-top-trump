

export type State = {
    state: string;
}

export type GameHistory = {
    winners: CardType[];
    cards: CardType[];
}

export type CardType = {
    id: string;
    name: string;
}


export type dataType = {
    allPersons: PlayerType[];
}

export type dataaType = {
    allStarships: StarshipType[];
}

export type PlayerType = {
    id: string;
    name: string;
    mass: number;
    height: number;
    gender: string;
}

export type StarshipType = {
    id: string;
    name: string;
    crew: number;
    passengers: number;
    hyperdriveRating: number;
}

export type HistoryState = {
    // history: {
        history: [
            {
                winners: CardType[];
                cards: CardType[];
            }
        ]
    // }
}

export type GameState = {
    game: {
        players: dataType[];
        starships: dataaType[];
    }
}