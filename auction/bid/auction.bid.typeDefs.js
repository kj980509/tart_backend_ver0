import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        bid(userId:Int!, artId:Int!, price:Int!):MutationResponse!
    }
`
