import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        deletePost(
            postId:Int!
        ):MutationResponse!
    }
`
