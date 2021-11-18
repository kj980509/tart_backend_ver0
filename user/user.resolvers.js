import client from "../client";
import {assertWrappingType} from "graphql";

export default {
    User:{
        isMe: ({id}, _, {loggedInUser}) => {
            return id === loggedInUser.id
        },
        totalFollowers: async ({id},__,{loggedInUser})=>{
            if (id !== loggedInUser.id){
                return false
            }
            const {followers} = await client.user.findUnique({
                where:{id:loggedInUser.id},
                select:{followers:true}
            })
            return followers.length
        },
        totalFollowings: ({id},__,{loggedInUser})=>{
            if (id !== loggedInUser.id){
                return false
            }
            const {followings} = client.user.findUnique({
                where:{id:loggedInUser.id},
                select:{followings:true}
            })

            return followings.length
        },
        arts: async ({id},_,{loggedInUser}) =>{
            if (id !== loggedInUser.id){
                return false
            }
            const arts = await client.art.findMany({
                where:{userId:id}
            })

            return arts

        }
    }
}
