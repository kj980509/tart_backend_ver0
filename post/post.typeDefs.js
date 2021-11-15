import {gql} from "apollo-server-express";

export default gql`
    type Post {
        id: Int
        category: PostCategory
        user: User
        title: String
        post: String
        imageUrl: String
        
    }
    
    type PostCategory {
        id: Int!
        category: String
    }
`
