import client from "../../client";

export default {
    Mutation:{
        unfollowUser: async (_,{id},{loggedInUser}) =>{

            const isExist = await client.user.findUnique({
                where:{id}
            })
            if (!isExist){
                return{
                    ok: false,
                    error: "User Not Exist"
                }
            }

            await client.user.update({
                where:{id:loggedInUser.id},
                data:{
                    followings:{
                        disconnect:{id}
                    }
                }
            })

            return {
                ok:true
            }


        }
    }
}
