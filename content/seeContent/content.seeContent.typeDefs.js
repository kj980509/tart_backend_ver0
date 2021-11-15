import {gql} from "apollo-server-express";

export default gql`
    type Query{
        seeContent(contentId:Int!):Content!
    }
`
