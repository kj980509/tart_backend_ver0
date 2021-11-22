import client from "../../client";
import {uploadProfileToS3} from "../../shared/shared.utils";

export default {
    Mutation:{
        editProfile: async (_,{
            userId,userName, gender, birth, profile, description
        },{loggedInUser})=>{

            // Get user Info
            const user = await client.user.findUnique({
                where:{id:userId},
                select:{id:true}
            })

            // Check User Exist in DB
            if (!user){
                return{
                    ok:false,
                    error:"User Not Exist"
                }
            }

            // Check Authenticate
            if(user.id !== loggedInUser.id){
                return{
                    ok: false,
                    error: "Not Authenticated User"
                }
            }

            // Upload Image
            let imageUrl = null;
            if (profile){
                imageUrl = uploadProfileToS3(profile, userId,"profile")
            }

            // Update Info
            await client.user.update({
                where:{id:userId },
                data:{
                    userName, gender, birth, description,
                    profile:imageUrl
                }
            })

            return{
                ok:true
            }

        }
    }
}
