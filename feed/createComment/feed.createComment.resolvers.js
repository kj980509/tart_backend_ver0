import client from "../../client";

export default {
    Mutation:{
        createComment: async (_,{feedId, comment},{loggedInUser}) =>{
            await client.feedComment.create({
                data:{
                    feed:{
                        connect:{id:feedId}
                    },
                    user:{
                        connect:{id:loggedInUser.id}
                    },
                    comment
                }
            })

            return{
                ok:true
            }
        }
    }
}
