import client from "../../client";

export default {
    Query: {
        otherArts: async (_, {userId, artId, isExist}) => {

            // Get Other Arts of User
            let artIds = await client.art.findMany({
                where: {userId},
                select: {id:true}
            })

            artIds =  artIds.map( (artId) => artId.id  )

            artIds = artIds.filter(function(id) { return id !== artId })
            console.log(artIds)

            if (artIds.length === 0) {
                return{
                    ok: true,
                    isExist: false
                }
            }

            const imageUrls = []
            for (const artId of artIds){
                const {imageUrl} =  await client.artPhoto.findFirst({
                    where:{artId},
                    select:{imageUrl:true}
                })
                imageUrls.push(imageUrl)
            }



            return{
                ok:true,
                imageUrls: imageUrls,
                ids: artIds
            }

        }
    }
}
