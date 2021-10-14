import client from "../../client";
import {log} from "nodemon/lib/utils";

export default {
    Mutation:{
        likeFeed: async (_,{feedId},{loggedInUser}) =>{

            const isExist = await client.feed.findUnique({
                where:{id:feedId}
            })

            if(!isExist){
                return{
                    ok:false,
                    error:"Feed Not exist"
                }
            }

            const likeWhere = {
                feedId_userId:{
                    userId: loggedInUser.id,
                    feedId: feedId
                }
            }

            const like = await client.feedLike.findUnique({where:likeWhere})

            if (like){
                await client.feedLike.delete({where:likeWhere})
            } else{
                await client.feedLike.create({
                    data:{
                        user:{
                            connect:{id:loggedInUser.id}
                        },
                        feed:{
                            connect:{id:feedId}
                        }
                    }
                })
            }
            return{
                ok:true
            }
        }
    }
}
