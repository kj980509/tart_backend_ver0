import client from "../../client";
import {withFilter} from "graphql-subscriptions";
import pubsub from "../../pubsub";
import {NEW_BID} from "../../constants";
import {log} from "nodemon/lib/utils";

export default {
    Subscription:{
        bidAlarm:{
            subscribe: async (root, args, context, info) => {

                // Get Bid Info
                const art = await client.art.findMany({
                    where:{userId: context.id }
                })


                // Check Bid Exist
                if (!art){
                    throw new Error("Art Not Found")
                }

                return withFilter(
                    () => pubsub.asyncIterator(NEW_BID),
                    async ({bidAlarm},_,context) =>{
                        const art = await client.art.findUnique({
                            where:{id:bidAlarm.artId}
                        })
                        if (art.userId === context.id){
                            const art = await client.art.findMany({
                                where:{userId:context.id},
                                select:{id:true}
                            })
                            if (!art){
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
