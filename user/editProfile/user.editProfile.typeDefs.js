import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        editProfile(
            userId:Int!,
            userName:String,
            gender:String,
            birth:Int,
            profile:Upload,
            description:String,
        ):MutationResponse!
    }
`
