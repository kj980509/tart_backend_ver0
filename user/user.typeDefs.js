import {gql} from "apollo-server-express";

export default gql`
    type User {
        ## Personal Info
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
        isMe: Boolean!
        totalFollowers: Int
        totalFollowings: Int
        error: String
        ## Arts
        arts: [Art]
        ## Bid
        bids: [Bid]
    }
`
