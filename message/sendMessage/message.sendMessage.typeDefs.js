import {gql} from "apollo-server-express";

export default gql`
    type Mutation{
        sendMessage(roomId: Int, userId:Int, artId:Int,message:String!,):MutationResponse!
    }
`
