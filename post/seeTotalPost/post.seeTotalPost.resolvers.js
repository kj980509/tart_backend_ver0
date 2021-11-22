import client from "../../client";

export default {
    Query:{
        seeTotalPost: async (_,{categoryId}) =>{
            // Get Post Info
            const posts = await client.post.findMany({
                where:{categoryId}
            })
            if (!posts){
                return{
                    error: "Post Not Found"
                }
            }
            return posts
        }
    }
}
