import client from "../../client";

export default {
    Query: {
        otherArts: async (_, {userId, artId, isExist}) => {

            // Get Other Arts of User
            const arts = await client.art.findMany({
                where: {
                    userId,
                    NOT:{
                        id:artId
                    }
                }
            })
            console.log(arts);
            return arts


    }
}}
