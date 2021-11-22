import client from "../../client";

export default {
    Mutation:{
        artLike: async (_,{artId},{loggedInUser}) => {

            // Get Art Info
            const art = await client.art.findUnique({where: {id:artId}})

            // Check Existing Art
            if (!art) {
                return {
                    ok: false,
                    error: "Art Not Found."
                }
            }
            // Art Like Where
            const likeWhere = {
                artId_userId: {
                    userId: loggedInUser.id,
                    artId: artId,
                }
            }
            // Check Already Liked
            const like = await client.artLike.findUnique({
                where: likeWhere
            })

            if (like) {
                await client.artLike.delete({where: likeWhere})
            } else {
                await client.artLike.create({
                    data: {
                        user: {
                            connect: {id: loggedInUser.id}
                        },
                        art: {
                            connect: {id: art.id}
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
