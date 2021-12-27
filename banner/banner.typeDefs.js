import {gql} from "apollo-server-express";


export default gql`

    type Banner{
        id:Int!
        isActive:Boolean
        imageUrl:String
        createdAt:String
        error:String
    }
`
