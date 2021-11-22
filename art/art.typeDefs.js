import {gql} from "apollo-server-express";

export default gql`
    type Art {
        # Art Info
        id: Int
        title: String
        WorkingStartYear: Int
        WorkingStartMonth: Int
        WorkingStartDay: Int
        WorkingEndYear: Int
        WorkingEndMonth: Int
        WorkingEndDay: Int
        categoryId: Int
        isSuccessed: Boolean
        totalLikes:Int
        presentPrice:Int
        minimumPrice:Int
        createdAt: String
        updatedAt: String
        # photos
        photos:[ArtPhoto]
        # art Like
        artLikes: [ArtLike]
        # User Info
        user: User
        userId: Int
        isMe: Boolean
        # Bid
        bid: [Bid]
        error:String
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
