import {gql} from "apollo-server-express";

export default gql`
    type Query{
        seeTotalPost(categoryId:Int!):[Post]
    }
`
