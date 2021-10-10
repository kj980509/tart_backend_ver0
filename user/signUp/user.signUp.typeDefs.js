import client from "../../client";
import {gql} from "apollo-server-express";

export default gql`
    type Mutation {
        signUp(
            userName: String!
            email: String!
            gender: String!
            birth: Int!
        ): MutationResponse!
    }
`
