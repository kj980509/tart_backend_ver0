import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        createContent(
            title:String!,
            categoryId:Int!, 
            image:Upload!
        ):MutationResponse!
    }
`
