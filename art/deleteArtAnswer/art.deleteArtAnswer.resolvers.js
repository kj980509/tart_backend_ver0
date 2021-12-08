import client from "../../client";

export default {
    Mutation:{
        deleteArtAnswer: async (_,{userId, answerId},{loggedInUser}) =>{

            if(loggedInUser.id !== userId){
                return{
                    ok:false,
                    error: "Not Authenticated User"
                }
            }

            await client.artAnswer.delete({
                where:{
                    id:answerId
                }
            })
            return {
                ok:true
            }
        }
    }
}
