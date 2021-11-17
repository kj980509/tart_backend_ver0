import client from "../client";

export default {
    Bid:{
        user: async ({userId}) => client.user.findUnique({where:{id:userId}}),
        art: async ({artId}) => client.art.findUnique({where:{id:artId}})
    }
}
