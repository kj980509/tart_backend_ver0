import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        deleteArt(
            artId:Int!
            userId:Int!
        ):MutationResponse!
    }
`;
