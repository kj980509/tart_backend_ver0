import {gql} from "apollo-server-express";

export default gql`
    scalar Upload
    type Mutation {
        createArt(
            title: String!
            category: String!
            StartWorkingYear: Int!
            StartWorkingMonth: Int!
            StartWorkingDay: Int!
            EndWorkingYear: Int!
            EndWorkingMonth: Int!
            EndWorkingDay: Int!
            images: [Upload]!
        ): MutationResponse!
    }
`
