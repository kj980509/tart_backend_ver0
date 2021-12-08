import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        deleteArtQuestion(
            userId:Int!,
            questionId:Int!
        ):MutationResponse!
    }
`;
