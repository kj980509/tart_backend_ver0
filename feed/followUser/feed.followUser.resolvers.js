import client from "../../client";

export default {
    Mutation:{
        followUser: async (_,{id}, {loggedInUser}) => {
            // Find to follow User
            const isExist = await client.user.findUnique({where:{id}})

            if (!isExist) {
                return {
                    ok: false,
                    error: "User Not Exist"
                }
            }

            await client.user.update({
                where:{id:loggedInUser.id},
                data: {
                    followings: {
                        connect: {id}
                    }
                }
            })

            return {
                ok: true
            }



        }
    }
}

