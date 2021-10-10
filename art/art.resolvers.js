import client from "../client";

export default {
    Art:{
        user: ({userId}) => client.user.findUnique({where:{id:userId}})
    },
    ArtPhoto:{
        art: ({artId}) => client.user.findUnique({where:{id:artId}})
    }
}
