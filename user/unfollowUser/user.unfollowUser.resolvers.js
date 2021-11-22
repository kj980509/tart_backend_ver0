import client from "../../client";

export default {
    Mutation:{
        unfollowUser: async (_,{userId},{loggedInUser})=>{
            // Check Authenticating
            if (userId !== loggedInUser.id){
                return {
                    ok: false,
                    error: "Not Authenticated User"
                }
            }

            // Get User Info
            const user = await client.user.findUnique({
                where:{id:userId}
            })

            // Check User Existed In DB
            if(!user){
                return{
                    ok:false,
                    error: "User Not Found"
                }
            }

            // Disconnect Follow
            await client.user.update({
                where: {
                    id: loggedInUser.id
                },
                data: {
                    followings: {
                        disconnect: {
                            id:userId
                        }
                    }
                }
            })
            return {
                ok:true
            }
        }
    }
}
