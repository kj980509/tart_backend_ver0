import client from "../../client";

export default {
    Mutation:{
        deleteArt: async (_,{artId, userId},{loggedInUser}) =>{
            // Error Case: Not Authenticated User
            if(loggedInUser.id !== userId){
                return{
                    ok:false,
                    error: "Not Authenticated User"
                }
            }

            // Delete Photos
            await client.artPhoto.deleteMany({
                where:{
                    artId
                }
            })
            // Delete ArtLikes
            await client.artLike.deleteMany({
                where:{
                    artId
                }
            })
            // Delete ArtAnswer
            await client.artAnswer.deleteMany({
                where:{
                    artId
                }
            })
            // Delete ArtQuestion
            await client.artQuestion.deleteMany({
                where:{
                    artId
                }
            })

            await client.art.delete({
                where:{
                    id:artId
                }
            })
            return{
                ok:true
            }


        }
    }
}
