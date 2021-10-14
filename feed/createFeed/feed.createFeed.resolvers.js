import client from "../../client";
import {uploadFeedToS3} from "../../shared/shared.utils";

export default {
    Mutation:{
        createFeed: async (_,{images,description},{loggedInUser}) =>{

            const createdFeed = await client.feed.create({
                data:{
                    user:{
                        connect:{id:loggedInUser.id}
                    },
                    description
                }
            })
            const feedId = createdFeed.id

            let imageUrls = []
            for (const img of images){
                const imageUrl = await uploadFeedToS3(img,feedId,"FeedImage")
                imageUrls.push(imageUrl)
            }

            for (const url of imageUrls){
                await client.feedPhoto.create({
                    data:{
                        imageUrl: url,
                        feed:{
                            connect:{
                                id:feedId
                            }
                        }

                    }
                })
            }
            return{
                ok:true,
            }


        }
    }
}
