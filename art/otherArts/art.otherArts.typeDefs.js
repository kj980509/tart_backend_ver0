import {gql} from "apollo-server-express";

export default gql`
    type Query{
        otherArts(artId:Int!, userId:Int!): [Art]
    }

`
