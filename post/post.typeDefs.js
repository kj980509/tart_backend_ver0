import {gql} from "apollo-server-express";

export default gql`
    type Post {
        # Post Info
        id: Int
        title: String
        post: String
        imageUrl: String
        category: PostCategory
        categoryId:Int
        isHot: Boolean
        totalLikes: Int
        isMine: Boolean
        updatedAt: String
        createdAt: String
        ## User
        user: User 
        userId: Int
        ## Comments
        comments: [PostComment]
        error: String
    }
    type PostCategory {
        id: Int!
        category: String
        posts:[Post]
    }
    type PostComment {
        id: Int
        user: User
        userId: Int
        comment: String
        rootCommentId: Int
        post:Post
        postId: Int
        isMine: Boolean
    }
    
    
`
