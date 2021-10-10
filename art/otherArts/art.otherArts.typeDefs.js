import {gql} from "apollo-server-express";

export default gql`
    
    type Arts{
        id: Int!
        ok: Boolean!
        error: String
        imageUrls: [String]
        isExist: Boolean!
    }
    
    type Query{
        otherArts(artId:Int!, userId:Int!): Arts!
    }

`
