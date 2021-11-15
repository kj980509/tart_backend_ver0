import client from "../../client";

export default {
    Mutation:{
        likeComment: async (_, {commentId}, {loggedInUser}) => {
            const likeWhere = {
                commentId_userId: {
                    userId: loggedInUser.id,
                    commentId,
                }
            }
            // Get Comment Info
            const comment = await client.postComment.findUnique({
                where:{id:commentId}
            })
            // Error Case: Comment Not Exist
            if(!comment){
                return{
                    ok:false,
                    error: "Comment Not Exist"
                }
            }
            // Get Like Info
            const like = await client.postCommentLike.findUnique({
                where:likeWhere
            })

            if(like){
                await client.postCommentLike.delete({
                    where:likeWhere
                })
            } else{
                await client.postCommentLike.create({
                    data:{
                        user:{
                            connect:{
                                id:loggedInUser.id
                            }
                        },
                        comment:{
                            connect:{
                                id:commentId
                            }
                        }
                    }
                })
            }
            return{
                ok:true
            }


        }
    }
}
