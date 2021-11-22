import client from "../client";

export default {
    Bid:{
        user: async ({userId}) => await client.user.findUnique({where:{id:userId}}),
        art: async ({artId}) => await client.art.findUnique({where:{id:artId}})
    }
}
