import client from "../../client";

export default {
    Mutation:{
        editComment: async (_,{commentId,newComment},{loggedInUser}) =>{
            // Get oldComment Info
            const oldComment = await client.postComment.findUnique({
                where:{id:commentId},
                select:{
                    id:true,
                    comment:true,
                    user:true
                }
            })
            // Error case: oldComment Not Exist
            if(!oldComment){
                return{
                    ok:false,
                    error:"Old Comment Not Exist"
                }
            }

            // Error case: Not Authenticated User
            if (oldComment.user.id !== loggedInUser.id){
                return{
                    ok:false,
                    error: "Not Authenticated User"
                }
            }

            // Edit Comment to New Comment
            const comment = await client.postComment.update({
                where:{
                    id:commentId
                },
                data:{
                    comment:newComment
                }
            })

            // Error case: Update Data Failed
            if (!comment){
                return{
                    ok:false,
                    error: "Comment Edit Failed"
                }
            }

            return{
                ok:true
            }

        }
    }
}
