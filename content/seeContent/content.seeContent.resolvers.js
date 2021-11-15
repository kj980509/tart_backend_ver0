import client from "../../client";

export default {
    Query:{
        seeContent: async (_,{contentId}) =>{
            return client.content.findUnique({
                where:{
                    id:contentId
                }
            })
        }
    }
}
