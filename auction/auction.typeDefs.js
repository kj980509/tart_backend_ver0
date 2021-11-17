import {gql} from "apollo-server-express";

export default gql`
    type Bid{
        id: Int!
        user: User!
        userId: Int!
        art: Art!
        price: Int!
        createdAt: String
        isSuccessed: Boolean
    }
`
