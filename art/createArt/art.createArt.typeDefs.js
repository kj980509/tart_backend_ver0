import {gql} from "apollo-server-express";

export default gql`
    scalar Upload
    type Mutation {
        createArt(
            title: String!
            category: String!
            WorkingStartYear: Int!
            WorkingStartMonth: Int!
            WorkingStartDay: Int!
            WorkingEndYear: Int!
            WorkingEndMonth: Int!
            WorkingEndDay: Int!
            images: [Upload]!
            basePrice: Int!
            minimumPrice: Int!
        ): MutationResponse!
    }
`
