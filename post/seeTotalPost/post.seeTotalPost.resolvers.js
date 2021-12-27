import client from "../../client";

export default {
    Query:{
        seeTotalPost: async (_,{categoryId}) =>{
            // Get Post Info
            let posts = null;
            if (categoryId === 0){
                posts = await client.post.findMany()
            }
            posts = await client.post.findMany({
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
