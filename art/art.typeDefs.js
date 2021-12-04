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
        explain: String
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
        # QnA
        questions:[ArtQuestion]
        answers:[ArtAnswer]
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
    type ArtQuestion{
        id: Int
        user: User
        userId: Int
        art: Art
        artId: Int
        question: String
        isAnswered: Boolean
        answers: ArtAnswer
        createdAt: String
        updatedAt: String
    }
    type ArtAnswer{
        id: Int
        user: User
        userId: Int
        art: Art
        artId: Int
        answer: String
        question: ArtQuestion
        questionId: Int
        createdAt: String
        updatedAt: String
    }
`
