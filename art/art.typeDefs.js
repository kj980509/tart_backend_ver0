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
        isSuccessed: Boolean 
        user: User
        createdAt: String!
        updatedAt: String!
        photos: [ArtPhoto]
    }
    type ArtPhoto {
        id: Int!
        art: Art!
        artId: Int!
        file: String!
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
