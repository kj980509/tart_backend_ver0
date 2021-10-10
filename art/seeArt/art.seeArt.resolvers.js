import client from "../../client";

export default {
    Query: {
        seeArt: async (_,{categoryName}) =>{
            if(categoryName === "total"){
                console.log("total")
                const [totalCategory] = await client.art.findMany({
                    take:2,
                    skip:0,
                    orderBy:{
                        createdAt:"desc"
                    }
                })
                return totalCategory

            } else{
                const SelectedCategoryId = await client.category.findFirst({
                    where:{name:categoryName},
                    select:{id:true}
                })
                const [selectedCategory] = await client.art.findMany({
                    where:{categoryId:SelectedCategoryId.id},
                    take:2,
                    skip:0,
                    orderBy:{
                        createdAt:"desc"
                    }
                })
                return selectedCategory

            }
        }
    }
}
