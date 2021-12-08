import client from "../../client";

export default {
    Query:{
        seeCategories: async () => await client.artCategory.findMany()
    }
}
