import client from "../client";

export default {
    Art: {
        user: async({userId}) => await client.user.findUnique({where: {id: userId}}),
        totalLikes: async({id}) => await client.artLike.count({where: {artId: id}}),
        photos: async ({id}) => await client.artPhoto.findMany({where: {artId: id}}),
        isMe: ({userId}, _, {loggedInUser}) => {
            return userId === loggedInUser.id
        },
        bid: ({id}) => client.bid.findMany({where: {artId: id}}),
        artLikes: async ({id}) => await client.artLike.findMany({
            where:{artId:id}
        })
    },

    ArtPhoto: {
        art: async ({artId}) => await client.art.findUnique({where: {id: artId}})
    },

    ArtLike: {
        art: async (artId) => await client.art.findUnique({
            where:{id:artId}
        }),
        user: async (userId) => await client.user.findUnique({
            where:{id:userId}
        })
    }
}
