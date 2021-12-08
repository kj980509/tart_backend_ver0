import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        deleteArtAnswer(
            userId:Int!
            answerId:Int!
        ):MutationResponse!
    }
`;
