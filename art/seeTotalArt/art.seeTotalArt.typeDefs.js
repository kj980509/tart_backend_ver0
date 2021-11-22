import {gql} from "apollo-server-express";

export default gql`
    type Query {
        seeTotalArt(
            categoryId: Int!,
            take: Int!,
            offset: Int!
        ): [Art]
    }
`
