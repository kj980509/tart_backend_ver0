import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        bid( artId:Int!, price:Int!):MutationResponse!
    }
`
