import {gql} from "apollo-server-express";

export default gql`
    type Mutation {
        createQuestion(
            userId: Int!
            artId: Int!
            question: String!
        ): MutationResponse!
    }
`
