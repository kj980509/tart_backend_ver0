import client from "../../client";

export default {
    Query:{
        checkUserName: async (_,{userName}) => {
            const user = await client.user.findFirst({
                where:{userName}
            })
            if (user){
                return{
                    ok: false,
                    error: "User already Exist"
                }
            }
            return{
                ok:true
            }
        }
    }
}
