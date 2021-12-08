import client from "../../client";

export default {
    Mutation:{
        deleteArtQuestion: async (_,{userId, questionId},{loggedInUser})=>{

            if(loggedInUser.id!==userId){
                return{
                    ok:false,
                    error:"Not Authenticated User"
                }
            }

            // Delete Art Answers
            await client.artAnswer.deleteMany({
                where:{
                    questionId
                }
            })
            // Delete Art Question
            await client.artQuestion.delete({
                where:{
                    id:questionId
                }
            })
            return{
                ok:true
            }

        }
    }
}
