import client from "../../client";
import {uploadPostToS3} from "../../shared/shared.utils";
export default {
    Mutation:{
        editPost: async (_,{postId, title, post, image},{loggedInUser}) =>{
            const oldPost = await client.post.findUnique({
                where:{id:postId}
            })
            // Error Case: Not Authenticated User
            if (loggedInUser.id !== oldPost.userId){
                return {
                    error: "Not Authenticated User"
                }
            }

            let imageUrl = null;
            if(image){
                imageUrl = await uploadPostToS3(image, loggedInUser.id, "post")
            }

            const newPost = await client.post.update({
                where:{
                    id:postId
                },
                data:{
                    title,
                    post,
                    ...(imageUrl && {imageUrl})
                }
            })

            if(!newPost) {
                return{
                    ok:false,
                    error:"Edit Post Failed"
                }
            }
            return{
                ok:true
            }



        }
    }
}
