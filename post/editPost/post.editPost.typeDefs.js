import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        editPost(
            postId: Int!
            title: String
            post: String
            image: Upload
        ):MutationResponse!
    }
`;
