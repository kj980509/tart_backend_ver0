import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        deletePost(
            userId:Int!
            postId:Int!
        ):MutationResponse!
    }
`
