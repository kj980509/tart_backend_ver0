import {gql} from "apollo-server-express";

export default gql`
    type Room{
        id: Int!
        users: [User]
        messages: [Message]
        createdAt: String!
        updatedAt: String!
        error: String
    }
    type Message{
        id: Int!
        message: String!
        user: User!
        room: Room!
        createdAt: String!
        updatedAt: String!
    }
`
