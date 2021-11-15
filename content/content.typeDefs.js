import {gql} from "apollo-server-express";

export default gql`
    type Content{
        id: Int
        imageUrl:String
        categoryId: Int!
    }
`
