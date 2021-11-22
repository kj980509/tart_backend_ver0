import client from "../../client";

export default {
    Query:{
        artSearch: async (_,{keyword}) =>
            await client.art.findMany({
                where:{
                    title:{contains: keyword}
                }
            })
    }
}
