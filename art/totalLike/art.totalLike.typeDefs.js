import {gql} from "apollo-server-express";

export default gql`
    
    type likeNum{
        ok: Boolean!
        error: String
        totalLikes: Int!
    }
    
    type Query{
        totalLike(id:Int!): likeNum!
    }
`
