import client from "../client";

export default {
    Content:{
        contentCategory: async ({categoryId}) =>
            await client.contentCategory.findUnique({
                where:{id:categoryId}
            })

    },
    ContentCategory:{
        contents: async ({id})  =>
            await client.content.findMany({
                where:{categoryId:id}
            })
        }

}
