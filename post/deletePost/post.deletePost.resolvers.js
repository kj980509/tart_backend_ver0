import client from "../../client";

export default {
    Mutation:{
        deletePost: async (_,{postId,userId},{loggedInUser}) => {
            const post = await client.post.findUnique({
                where:{id:postId}
            })
            // Error Case: Not Exist Post
            if(!post){
                return{
                    ok:false,
                    error:"Not Exist Post"
                }
            }
            // Error Case: Not Authenticated User
            if(userId !== loggedInUser.id){
                return{
                    ok: false,
                    error: "Not Authenticated User"
                }
            }

            // Delete PostCommentLike
            await client.postCommentLike.deleteMany({
                where:{
                    postId
                }
            })
            // Delete PostComment
            await client.postComment.deleteMany({
                where:{
                    postId
                }
            })
            // Delete PostLike
            await client.postLike.deleteMany({
                where:{
                    postId
                }
            })
            // Delete Post
            await client.post.delete({
                where:{id:postId}
            })
            return{
                ok:true
            }
        }
    }
}
