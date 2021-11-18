import {gql} from "apollo-server-express";

export default gql`
    type Art {
        id: Int!
        title: String!
        StartWorkingYear: Int!
        StartWorkingMonth: Int!
        StartWorkingDay: Int!
        EndWorkingYear: Int!
        EndWorkingMonth: Int!
        EndWorkingDay: Int!
        categoryId: Int!
        isSuccessed: Boolean!
        user: User!
        totalLikes:Int!
        createdAt: String!
        updatedAt: String!
        photos:ArtPhoto
        error: String
        bid: [Bid]
        isMe: Boolean
        presentPrice:Int
        minimumPrice:Int
    }
    type ArtPhoto {
        id: Int!
        art: Art!
        artId: Int!
        imageUrl: String!
    }
    type ArtLike {
        id: Int!
        art: Art!
        artId: Int!
        user: User!
        userId: Int!
        createdAt: String!
        updatedAt: String!
    }
`
