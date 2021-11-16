import client from "../../client";

export default {
    Query:{
        seePost: async (_,{postId})=>{
            const post = client.post.findUnique({where:{id:postId}})
            if(!post){
                return{
                    error:false
                }
            }
            return post
        }
    }
}
