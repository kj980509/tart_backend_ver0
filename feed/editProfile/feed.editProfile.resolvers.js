import client from "../../client";
import {uploadProfileToS3} from "../../shared/shared.utils";

export default {
    Mutation:{
        editProfile: async (_,{id,profile,userName,description},{loggedInUser}) =>{
            // Check Authenticate
            if(id !== loggedInUser.id){
                return{
                    ok: false,
                    error: 'Cannot Edit Profile(Not Authenticated User)'
                }
            }

            // Upload ProfileImage & Get Location
            let imageUrl = null
            if(profile){
                imageUrl = await uploadProfileToS3(profile,id,'profile')
            }

            await client.user.update({
                where:{id},
                data:{
                    userName,
                    description,
                    ...(imageUrl && {profile: imageUrl } )
                }
            })

            return{
                ok: true
            }
        }
    }

}
