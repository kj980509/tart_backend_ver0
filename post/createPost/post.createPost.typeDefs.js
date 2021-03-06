import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        createPost(
            categoryId: Int!
            title: String!
            post: String!
            images:[Upload]
        ):MutationResponse!
    }
`
