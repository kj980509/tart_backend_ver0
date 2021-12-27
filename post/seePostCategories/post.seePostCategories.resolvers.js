import client from "../../client";


export default {
    Query:{
        seePostCategories: async () => {
            const categories = await client.postCategory.findMany()
            return categories
        }
    }
}
