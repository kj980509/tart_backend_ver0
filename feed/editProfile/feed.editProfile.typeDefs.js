import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        editProfile(
            id: Int!,
            profile:Upload, 
            userName:String,
            description:String  ):MutationResponse!
    }
`
