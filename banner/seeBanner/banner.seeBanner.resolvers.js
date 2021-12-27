import client from "../../client";

export default {
    Query: {
        seeBanner: async () =>{
            const banners = await client.banner.findMany({
                where:{
                    isActive:true
                }
            })
            return banners
        }
    }
}
