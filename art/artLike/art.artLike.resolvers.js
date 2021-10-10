import client from "../../client";

export default {
    Mutation:{
        artLike: async (_,{id},{loggedInUser}) => {
            const art = await client.art.findUnique({where: {id}})

            // Check Existing Art
            if (!art) {
                return {
                    ok: false,
                    error: "Art Not Found."
                }
            }
            //
            const likeWhere = {
                artId_userId: {
                    userId: loggedInUser.id,
                    artId: id,
                }
            }
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
