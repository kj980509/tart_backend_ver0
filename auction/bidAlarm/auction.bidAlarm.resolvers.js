import client from "../../client";
import {withFilter} from "graphql-subscriptions";
import pubsub from "../../pubsub";
import {NEW_BID} from "../../constants";

export default {
    Subscription:{
        bidAlarm:{
            subscribe: async (root, args, context, info) => {

                // Get Bid Info
                const art = await client.art.findUnique({
                    where:{id: args.artId },
                    select:{id:true}
                })
                // Check Bid Exist
                if (!art){
                    throw new Error("Art Not Found")
                }

                return withFilter(
                    () => pubsub.asyncIterator(NEW_BID),
                    async ({bidAlarm},{artId},{loggedInUser}) =>{

                        if (bidAlarm.artId === artId){
                            console.log("asd")
                            const art = await client.art.findUnique({
                                where:{id:artId},
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
