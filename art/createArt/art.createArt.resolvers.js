import client from "../../client";
import {uploadArtToS3} from "../../shared/shared.utils";
import {GraphQLUpload} from "graphql-upload";
export default {
    Upload: GraphQLUpload,
    Mutation:{
        createArt: async (_,{title,category, StartWorkingYear, StartWorkingMonth,StartWorkingDay,
            EndWorkingYear,EndWorkingMonth, EndWorkingDay, images, basePrice,minimumPrice},{loggedInUser})=>{

            const categoryId = await client.category.findFirst({
                where:{name:category},
                select:{id:true}
            })

            if (!categoryId){
                return{
                    ok: false,
                    error: "Not Defined Category."
                }
            }
            const createdArt = await client.art.create({
                data:{title,categoryId:categoryId.id, StartWorkingYear, StartWorkingMonth,StartWorkingDay,
                    EndWorkingYear,EndWorkingMonth, EndWorkingDay,basePrice, minimumPrice,
                    user: {
                        connect:{id:loggedInUser.id}
                    },
                    presentPrice:basePrice
                }
            })

            let imageUrls = []
            for (const img of images) {
                const imageUrl = await uploadArtToS3(img, createdArt.id ,"BidArtImage")
                imageUrls.push(imageUrl)
            }
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
