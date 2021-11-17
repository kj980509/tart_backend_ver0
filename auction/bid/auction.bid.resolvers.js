import client from "../../client";
import pubsub from "../../pubsub";
import {NEW_BID} from "../../constants";

export default {
    Mutation:{
        bid: async (_,{artId, price},{loggedInUser}) => {

            // Art Info
            const art = await client.art.findUnique({
                where:{id:artId},
                select:{
                    presentPrice: true,
                    userId: true,
                    minimumPrice:true}
            })

            // Check Own Artist Participated Auction
            if (loggedInUser.id === art.userId){
                return{
                    ok:false,
                    error: "You can't Participate Auction"
                }
            }

            const presentPrice = art.presentPrice
            const minimumPrice = art.minimumPrice
            const isMinimum =  price - presentPrice
            console.log(isMinimum)
            // Check Input Price is Higher then Present Price && Satisfy MinimumPrice
            if (price <= presentPrice || isMinimum <= minimumPrice  ){
                return {
                    ok: false,
                    error: "Cannot Bid"
                }
            } else{
                const newBid = await client.bid.create({
                    data:{
                        user:{
                            connect:{id:loggedInUser.id}
                        },
                        art:{
                            connect:{id:artId}
                        },
                        price
                    }
                })
                await client.art.update({
                    where:{id:artId},
                    data:{
                        presentPrice:price
                    }
                })

                await pubsub.publish(NEW_BID,{bidAlarm:{...newBid}})

                return{
                    ok:true
                }

            }



        }
    }
}
