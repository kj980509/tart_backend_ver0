import client from "../../client";

export default {
    Query: {
        otherArts: async (_, {userId, artId, isExist}) => {

            // Get User Info
            const user = await client.user.findUnique({
                where:{id:userId}
            })

            // Check User Exist
            if(!user){
                throw new Error("User Not Exist")
            }

            // Get Other Arts of User
            const arts = await client.art.findMany({
                where: {
                    userId,
                    NOT:{
                        id:artId
                    }
                }
            })

            // Check Other Arts Exist
            if(arts.length === 0){
                throw new Error("No Other Arts")
            }

            return arts


    }
}}
