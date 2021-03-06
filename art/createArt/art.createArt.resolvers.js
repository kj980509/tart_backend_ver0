import client from "../../client";
import {uploadArtToS3} from "../../shared/shared.utils";
import {GraphQLUpload} from "graphql-upload";
//WorkingStartYear, WorkingStartMonth,WorkingStartDay,WorkingEndYear,WorkingEndMonth, WorkingEndDay,minimumPrice,
export default {
    Upload: GraphQLUpload,
    Mutation:{
        createArt: async (_,{title,category, images, basePrice, explain},{loggedInUser})=>{

            // Get Category Id
            const categoryId = await client.artCategory.findFirst({
                where:{category},
                select:{id:true}
            })

            // Check category Id Exist
            if (!categoryId){
                return{
                    ok: false,
                    error: "Not Defined Category."
                }
            }

            // Create Art & Get Info
            const createdArt = await client.art.create({
                data:{title, basePrice,explain,
                    user: {
                        connect:{id:loggedInUser.id}
                    },
                    category:{
                        connect:{id:categoryId.id}
                    },
                    presentPrice:basePrice
                }
            })

            let imageUrls = []
            // Upload Photos to Aws
            for (const img of images) {
                const imageUrl = await uploadArtToS3(img, createdArt.id ,"BidArtImage")
                imageUrls.push(imageUrl)
            }
            // Create Art Photo
            for (const url of imageUrls){
                await client.artPhoto.create({
                    data :{
                        imageUrl: url,
                        art: {
                            connect:{
                                id: createdArt.id
                        }
                    }
                }
                })
            }
            return {
                ok: true
            }

        }
    }
}
