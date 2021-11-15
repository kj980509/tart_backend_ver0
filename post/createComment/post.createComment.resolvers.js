import client from "../../client";

export default {
    Mutation:{
        createComment: async (_,{postId,comment}, {loggedInUser}) =>{
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
