import client from "../../client";
import {uploadPostToS3} from "../../shared/shared.utils";
export default {
    Mutation:{
        createPost: async (_,{categoryId,title,image,post},{loggedInUser})=>{
            let imageUrl = null
            // Upload Image to AWS, if Image Exist
            if(image){
                imageUrl = uploadPostToS3(image, loggedInUser.id, "postImage")
            }
            // Create Post
            const newPost = await client.post.create({
                data:{
                    title,post,imageUrl,
                    user:{
                        connect:{
                            id:loggedInUser.id
                        }
                    },
                    category:{
                        connect:{
                            id:categoryId
                        }
                    }
                }
            })

            // Check Data Upload Succeed
            if(!newPost){
                return{
                    ok:false,
                    error: "Post Upload Failed"
                }
            } return{
                ok: true
            }

        }
    }
}
