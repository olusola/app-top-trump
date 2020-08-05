import { gql } from '@apollo/client'

export const GET_PLAYERS = gql`
  query {
    allPersons {
      id,
      name,
      mass,
      height,
      gender
    }
  }
`

export const GET_STARSHIPS = gql`
query {
  allStarships {
    id,
    name,
    crew,
    passengers,
    hyperdriveRating
  }
}`