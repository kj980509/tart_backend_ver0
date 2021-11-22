import client from "../../client";

export default {
    Mutation:{
        followUser: async (_,{userId},{loggedInUser}) =>{

            // Check Authenticate
            if(userId !== loggedInUser.id){
                return{
                    ok:false,
                    error: "Not Authenticated User"
                }
            }

            // Get User Info
            const user = await client.user.findUnique({
                where:{id:userId}
            })

            // Check User Existed
            if(!user){
                return{
                    ok:false,
                    error: "User Not Found"
                }
            }

            // Follow User
            await client.user.update({
                where: {
                    id: loggedInUser.id,
                },
                data: {
                    followings: {
                        connect: {
                            id:userId,
                        },
                    },
                },
            })

            return{
                ok:true
            }
        }
    }
}
