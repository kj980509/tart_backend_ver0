import client from "../../client";

export default {
    Query:{
        me: (_,__,{loggedInUser})=>{

            // Check loggedInUser Exist
            if(!loggedInUser){
                return{
                    error:"LoggedInUser Not Exist"
                }
            }

            const me = client.user.findUnique({
                where:{id:loggedInUser.id}
            })

            if(me){
                return me
            }

        }
    }

}
