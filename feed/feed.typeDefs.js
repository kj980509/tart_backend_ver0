import {gql} from "apollo-server-express";

export default gql`
    type Feed{
        id: Int!
        user: User!
        userId: Int!
        photos: [FeedPhoto]!
        description: String
        totalLikes: Int!
        comments: [FeedComment]
        createdAt: String
        error: String
    }
    
    type FeedPhoto{
        id: Int!
        feed:Feed!
        feedId: Int!
        imageUrl: String!
    }
    
    type FeedComment{
        id: Int!
        feed: Feed!
        feedId: Int!
        user: User!
        userId: Int!
        comment: String!
        createdAt: String!
        updatedAt: String!
    }
`
