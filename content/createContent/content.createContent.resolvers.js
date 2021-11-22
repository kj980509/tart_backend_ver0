import client from "../../client";
import {uploadContentToS3} from "../../shared/shared.utils";
export default {
    Mutation:{
        createContent: async (_,{title, categoryId, image}) =>{

            // Upload Image To AWs
            const imageUrl = await uploadContentToS3(image,"content")

            // Check Upload Succeed
            if (!imageUrl){
                return{
                    ok: false,
                    error: "Upload Failed"
                }
            } else{
                // Create Content
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
                // Check Create Succeed
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
