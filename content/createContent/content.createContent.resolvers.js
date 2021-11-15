import client from "../../client";
import {uploadContentToS3} from "../../shared/shared.utils";
export default {
    Mutation:{
        createContent: async (_,{title, categoryId, image}) =>{
            const imageUrl = await uploadContentToS3(image,"content")
            if (!imageUrl){
                return{
                    ok: false,
                    error: "Upload Failed"
                }
            } else{
                const content = await client.content.create({
                    data:{
                        title,
                        imageUrl,
                        category:{
                            connect:{
                                id:categoryId
                            }
                        }
                    }
                })
                if (!content){
                    return{
                        ok:false,
                        error: "Upload File Failed"
                    }
                } return{
                    ok:true
                }
            }
        }
    }
}
