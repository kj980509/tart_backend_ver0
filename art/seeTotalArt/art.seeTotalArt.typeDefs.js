import {gql} from "apollo-server-express";

export default gql`
    type Query {
        seeTotalArt(categoryName: String!): [Art]
    }
`
