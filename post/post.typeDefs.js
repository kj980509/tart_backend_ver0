import {gql} from "apollo-server-express";

export default gql`
    type Post {
        id: Int
        user: User ## User
        title: String
        post: String
        imageUrl: String
        category: PostCategory ## Category
        comments: [PostComment]
        isHot: Boolean
        updatedAt: String
        createdAt: String
        error: String
        totalLikes: Int
    }
    type PostCategory {
        id: Int!
        category: String
    }
    type PostComment {
        id: Int
        user: User
        comment: String
        rootCommentId: Int
        postId: Int
    }
    
    
`
