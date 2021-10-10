import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        artLike(id:Int!): MutationResponse!
    }
`
