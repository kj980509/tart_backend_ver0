import client from "../../client";

export default {
    Query: {
        searchPost: async (_, {keyword}) =>
            await client.post.findMany({
                where:{
                    title:{contains:keyword}
                }
            })

    }
}
