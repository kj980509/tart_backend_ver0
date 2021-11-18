import {gql} from "apollo-server-express";

export default gql`
    type User {
        id: Int!
        userName: String!
        email: String
        gender: String
        birth: Int
        description: String
        isDev: Boolean
        createdAt: String!
        updatedAt: String!
        profile: String
        arts: [Art]
        isMe: Boolean!
        totalFollowers: Int
        totalFollowings: Int
    }
`
