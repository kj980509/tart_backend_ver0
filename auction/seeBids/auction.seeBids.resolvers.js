import client from "../../client";

export default {
    Query:{
        seeBids: async (_,__,{loggedInUser}) =>{
            const arts = await client.art.findMany({
                where:{userId:loggedInUser.id}
            })
            return arts
        }
    }
}
