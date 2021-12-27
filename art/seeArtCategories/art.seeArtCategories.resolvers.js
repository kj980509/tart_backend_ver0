import client from "../../client";

export default {
    Query:{
        seeArtCategories: async () => await client.artCategory.findMany()
    }
}
