import client from "../client";

export default {
    Bid:{
        user: ({userId}) => client.user.findUnique({where:{id:userId}}),
        art: ({artId}) => client.art.findUnique({where:{id:artId}})
    }
}
