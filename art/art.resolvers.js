import client from "../client";

export default {
    Art:{
        user: ({userId}) => client.user.findUnique({where:{id:userId}}),
        totalLikes: ({id}) => client.artLike.count({where:{artId:id}})
    },

    ArtPhoto:{
        art: ({artId}) => client.user.findUnique({where:{id:artId}})
    }
}
