import client from "../../client";

export default {
    Mutation:{
        deleteComment: async (_,{commentId},{loggedInUser})=>{
            // Get Comment Info
            const comment = await client.postComment.findUnique({
                where:{
                    id:commentId
                },
                select:{
                    id:true,
                    user:true
                }
            })
            // Error Case: Not Exist Comment
            if(!comment){
                return{
                    ok:false,
                    error: "Comment Not Exist"
                }
            }

            // Error Case: Not Authenticated User
            if(loggedInUser.id !== comment.user.id){
                return{
                    ok:false,
                    error: "Not Authenticated User"
                }
            }

            // Delete Comment
            await client.postComment.delete({
                where:{id:commentId}
            })
            return{
                ok:true
            }

        }
    }
}
