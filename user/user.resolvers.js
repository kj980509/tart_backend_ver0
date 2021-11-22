import client from "../client";
import {assertWrappingType} from "graphql";

export default {
    User:{
        isMe: ({id}, _, {loggedInUser}) => {
            return id === loggedInUser.id
        },
        totalFollowers: async ({id},__,{loggedInUser})=>{
            // Check Authenticating
            if (id !== loggedInUser.id){
                return false
            }

            // Get Total Followers
            const {followers} = await client.user.findUnique({
                where:{id:loggedInUser.id},
                select:{followers:true}
            })

            // Return Follower Length
            return followers.length
        },
        totalFollowings: ({id},__,{loggedInUser})=>{
            // Check Authenticating
            if (id !== loggedInUser.id){
                return false
            }

            // Get Total Followings
            const {followings} = client.user.findUnique({
                where:{id:loggedInUser.id},
                select:{followings:true}
            })

            // Return Total Following Length
            return followings.length
        },
        arts: async ({id},_,{loggedInUser}) =>{
            // Check Authenticating
            if (id !== loggedInUser.id){
                return false
            }
            // Return Arts
            const arts = await client.art.findMany({
                where:{userId:id}
            })
            return arts

        },
        bids: async ({id},_,{loggedInUser}) => {
            // Check Authenticating
            if (id !== loggedInUser.id){
                return false
            }
            // Return Bids
            const bids = await client.bid.findMany({
                where:{userId:id}
            })
            return bids
        }
    }
}
