import client from "../../client";
import {uploadArtToS3, uploadArtToS3ToS3} from "../../shared/shared.utils";
import {GraphQLUpload} from "graphql-upload";
export default {
    Upload: GraphQLUpload,
    Mutation:{
        createArt: async (_,{title,category, StartWorkingYear, StartWorkingMonth,StartWorkingDay,
            EndWorkingYear,EndWorkingMonth, EndWorkingDay, images},{loggedInUser})=>{

            const NewCategory = await client.category.findFirst({where:{name:category},})

            const createdArt = await client.art.create({
                data:{title,categoryId:NewCategory.id, StartWorkingYear, StartWorkingMonth,StartWorkingDay,
                    EndWorkingYear,EndWorkingMonth, EndWorkingDay,
                user: {
                    connect:{id:loggedInUser.id}
                }}
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
