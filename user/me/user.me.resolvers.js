import client from "../../client";

export default {
    Query:{
        me: (_,__,{loggedInUser})=>{
            client.user.findUnique({
                where:{id:loggedInUser.id}
            })
        }
    }

}
