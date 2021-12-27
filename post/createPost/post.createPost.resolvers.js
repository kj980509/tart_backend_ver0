import client from "../../client";
import {uploadArtToS3, uploadPostToS3} from "../../shared/shared.utils";
export default {
    Mutation:{
        createPost: async (_,{categoryId,title,images,post},{loggedInUser})=>{
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
            // Upload Photos to Aws
            let imageUrl = null
            let imageUrls = []
            // Upload Image to AWS, if Image Exist
            for (const img of images) {
                const imageUrl = await uploadArtToS3(img, newPost.id ,"BidArtImage")
                imageUrls.push(imageUrl)
            }
            // Create Art Photo
            for (const url of imageUrls){
                await client.postPhoto.create({
                    data :{
                        imageUrl: url,
                        post: {
                            connect:{
                                id: newPost.id
                            }
                        }
                    }
                })
            }

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
