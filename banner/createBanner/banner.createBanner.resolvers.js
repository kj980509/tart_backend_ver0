import client from "../../client";
import {uploadContentToS3} from "../../shared/shared.utils";

export default {
    Mutation: {
        createBanner: async (_,{image}) => {

            const imageUrl = await uploadContentToS3(image,'Banner')

            const banner = await client.banner.create({
                data:{
                    imageUrl
                }
            })
            if(!banner){
                return{
                    ok:false,
                    error: "Upload Failed"
                }
            }
            return{
                ok:true
            }
        }
    }
}
