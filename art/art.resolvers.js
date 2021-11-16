import client from "../client";

export default {
    Art:{
        user: ({userId}) => client.user.findUnique({where:{id:userId}}),
        totalLikes: ({id}) => client.artLike.count({where:{artId:id}}),
        photos: ({id}) => client.artPhoto.findFirst({where:{artId:id}}),
        isMe: ({id},_,{loggedInUser}) =>{
            return id === loggedInUser.id
        },
        bid: ({id}) =>client.bid.findMany({where:{artId:id}})
    }
    ,

    ArtPhoto:{
        art: ({artId}) => client.user.findUnique({where:{id:artId}})
    }
}
