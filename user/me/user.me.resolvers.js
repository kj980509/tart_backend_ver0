import client from "../../client";

export default {
    Query:{
        me: (_,__,{loggedInUser})=>{
            const me = client.user.findUnique({
                where:{id:loggedInUser.id}
            })

            if(me){
                return me
            }

        }
    }

}
