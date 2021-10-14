import client from "../../client";

export default {
    Query:{
        seeFeed: async (_,{feedId}) =>{
            const feed = await client.feed.findUnique({where:{id:feedId}})
            if (feed){
                return feed
            } else{
                return {
                    error: "Feed Not Found"
                }
            }
    }
}}
