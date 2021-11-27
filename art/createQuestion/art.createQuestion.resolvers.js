import client from "../../client";

export default {
    Mutation:{
        createQuestion: async (_,{artId,userId,question},{loggedInUser}) =>{
            // Error case: Not Authenticated User
            if(userId !== loggedInUser.id){
                return{
                    ok:false,
                    error: "Not Authenticated USer"
                }
            }

            // Error case: Origin Artist Question
            const art = await client.art.findUnique({where:{id:artId}})
            const artistId = art.userId
            if(loggedInUser.id === artistId){
                return{
                    ok:false,
                    error:"Origin Artist Question"
                }
            }

            const newQuestion = await client.artQuestion.create({
                data:{
                    question,
                    user:{
                        connect:{
                            id:userId
                        }
                    },
                    art:{
                        connect: {
                            id:artId
                        }
                    }
                }
            })
            // Error case: Data Upload Fail
            if(!newQuestion){
                return{
                    ok: false,
                    error: "Data Upload Fail"
                }
            }

            return{
                ok:true
            }


        }
    }
}
