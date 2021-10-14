import {withFilter} from "graphql-subscriptions"
import client from "../../client";
import pubsub from "../../pubsub";
import { NEW_MESSAGE} from "../../constants";

export default {
    Subscription:{
        updateRoom:{
            subscribe: async (root,args, context, info) =>{
                const room = await client.room.findUnique({
                    where:{
                        id:args.id,
                    },
                    select:{id:true}
                })

                if(!room){
                    throw new Error("Room Not Found.")
                }
                return withFilter(
                    () => pubsub.asyncIterator(NEW_MESSAGE),
                    async ({updateRoom},{id},{loggedInUser}) => {
                        if (updateRoom.roomId === id){
                            const room = await client.room.findUnique({
                                where:{id},
                                select:{id:true}
                            })
                            if(!room){
                                return false
                            } else{
                                return true
                            }
                        }
                    }
                )(root, args, context, info)
            }
        }
    }
}
