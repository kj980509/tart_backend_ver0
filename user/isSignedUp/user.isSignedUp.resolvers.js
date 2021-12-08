import client from "../../client";
import jwt from "jsonwebtoken";

export default {
    Query:{
        isSignedUp: async (_,{email}) =>{
            const user = await client.user.findFirst({
                where:{email}
            })
            if(user){
                const token = await jwt.sign({id:user.id}, process.env.SECRET_KEY)
                return{
                    ok:true,
                    token
                }
            }
            return{
                ok:false
            }
        }
    }
}
