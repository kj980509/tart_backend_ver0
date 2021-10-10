import client from "../../client";

export default {
    Query: {
        totalLike: async (_,{id}) => {
            const art = await client.art.findUnique({
                where:{id},
                select:{likes:true}
            })
            const likeNum =  art.likes.length

            return{
                ok: true,
                totalLikes: likeNum
            }
        }
    }
}
