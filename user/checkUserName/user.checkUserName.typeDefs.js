import {gql} from "apollo-server-express";

export default gql`
    type Query{
        checkUserName(
            userName:String!
        ):MutationResponse!
    }
`
