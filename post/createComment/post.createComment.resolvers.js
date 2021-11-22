import client from "../../client";

export default {
    Mutation:{
        createComment: async (_,{postId,comment}, {loggedInUser}) =>{
            // Check Post Existed
            const post = await client.post.findUnique({
                where:{id:postId}
            })
            if (!post){
                return{
                    ok:false,
                    error:"Post Not Exist"
                }
            }

            // Create Comment
            const newComment = await client.postComment.create({
                data:{
                    comment,
                    user:{
                        connect:{
                            id:loggedInUser.id
                        }
                    },
                    post:{
                        connect:{
                            id:postId
                        }
                    }
                }
            })

            // Check Comment Upload Succeed
            if(!newComment){
                return{
                    ok:false,
                    error: "Comment Upload Failed"
                }
            } return{
                ok: true
            }

        }
    }
}
