import client from "../../client";

export default {
    Mutation:{
        deletePost: async (_,{postId},{loggedInUser}) => {
            const post = await client.post.findUnique({
                where:{id:postId}
            })

            // Error Case: Not Authenticated User
            if(post.userId !== loggedInUser.id){
                return{
                    ok: false,
                    error: "Not Authenticated User"
                }
            }

            await client.post.delete({
                where:{id:postId}
            })
            return{
                ok:true
            }
        }
    }
}
