import {gql} from 'apollo-server-express'   

export const cardType = gql`
    type Card {
        id: ID!
    }
`
