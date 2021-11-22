import client from "../../client";

export default {
    Query: {
        seeTotalArt: async (_,{categoryId, offset, take}) =>{

            // Get Category Info
            const categories = await client.artCategory.findMany({
                select:{id:true}
            })
            // Check categoryId Exist
            const categoryIds= categories.map((category) => category.id)
            if(!(categoryIds.includes(categoryId))){
                throw new Error("Not Defined CategoryId")
            }

            // Return Total Arts
            if(categoryId === 0){
                const totalCategory = await client.art.findMany({
                    take:take,
                    skip:offset,
                    orderBy:{
                        createdAt:"desc"
                    }
                })
                return totalCategory

            } else{
                // Return Selected Category Arts
                const selectedCategory = await client.art.findMany({
                    where:{categoryId},
                    take:take,
                    skip:offset,
                    orderBy:{
                        createdAt:"desc"
                    }
                })
                return selectedCategory

            }
        }
    }
}
