import client from "../../client";

export default {
    Mutation:{
        likePost: async (_, {postId}, {loggedInUser}) =>{
            // Get Post Info
            const post = client.post.findUnique({
                where:{ id:postId },
                select:{ id:true }
            })
            // Error Case: Post Not Exist
            if(!post){
                return{
                    ok:false,
                    error: "Post Not Exist"
                }
            }

            const likeWhere = {
                postId_userId: {
                    userId: loggedInUser.id,
                    postId,
                }
            }

            const like = await client.postLike.findUnique({
                where:likeWhere
            })

            if(like){
                await client.postLike.delete({
                    where:likeWhere
                })
            } else{
                await client.postLike.create({
                    data:{
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
            }
            return{
                ok:true
            }
        }
    }
}
