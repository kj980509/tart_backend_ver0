import {gql} from "apollo-server-express";

export default gql`
    
    type Arts{
        ok: Boolean!
        error: String
        imageUrls: [String]
        ids: [Int]
        isExist: Boolean!
    }
    
    type Query{
        otherArts(artId:Int!, userId:Int!): Arts!
    }

`
