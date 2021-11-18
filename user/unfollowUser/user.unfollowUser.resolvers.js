import client from "../../client";

export default {
    Mutation:{
        unfollowUser: async (_,{userId},{loggedInUser})=>{
            const user = await client.user.findUnique({
                where:{id:userId}
            })

            if(!user){
                return{
                    ok:false,
                    error: "User Not Found"
                }
            }

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
