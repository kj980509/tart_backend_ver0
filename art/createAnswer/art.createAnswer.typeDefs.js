import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        createAnswer(
            userId: Int!
            artId: Int!
            answer: String!
            questionId: Int!
        ):MutationResponse!
    }
`
