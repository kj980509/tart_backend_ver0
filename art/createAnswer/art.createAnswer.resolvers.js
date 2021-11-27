import client from "../../client";

export default {
    Mutation:{
        createAnswer: async (_,{userId,questionId, answer, artId},{loggedInUser}) =>{

            // Error Case: Not Authenticated User
            if (userId !== loggedInUser.id){
                return{
                    ok: false,
                    error:"Not Authenticated User"
                }
            }

            // Error Case: Art Not Found
            const art = await client.art.findUnique({where:{id:artId}})
            if(!art){
                return{
                    ok:false,
                    error:"Art Not Found"
                }
            }

            // Error Case: Only Artist Can Upload Answer
            if(art.userId !== loggedInUser.id){
                return{
                    ok:false,
                    error:"Only Artist Can Upload Answer"
                }
            }

            // Error Case: Wrong Question
            const question = await client.artQuestion.findUnique({
                where:{id:questionId}
            })
            if(question.id !== questionId){
                return{
                    ok:false,
                    error:"Wrong Question"
                }
            }

            // Create Answer
            const newAnswer = await client.artAnswer.create({
                data:{
                    answer,
                    user:{
                        connect:{id:userId}
                    },
                    question:{
                        connect:{id:questionId}
                    }
                }
            })
            // Error Case: Answer Upload Failed
            if(!newAnswer){
                return{
                    ok:false,
                    error:"Upload Fail"
                }
            }
            return{
                ok:true,
            }

        }
    }
}
