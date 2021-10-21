import client from "../../client";
import jwt from "jsonwebtoken";
export default {
    Mutation:{
        signUp: async (_,{userName, email, gender, birth})=>{

            try{
                // Check existing userName
                const ExistingUserName = await client.user.findFirst({where:{userName}})
                if (ExistingUserName){
                    throw new Error("이미 존재하는 유저명입니다.")
                }
                // Check existing Email
                console.log(email)
                const existingEmail = await client.user.findFirst({
                    where:{email},
                    select:{email:true}
                })
                console.log(existingEmail)
                if (existingEmail){
                    throw new Error("이미 가입된 이메일입니다.")
                }

                // Input Data To DataBase
                const user = await client.user.create({
                    data:{userName,email, gender,birth}
                })

                // Get Signed Up User Id
                const token = await jwt.sign({id:user.id}, process.env.SECRET_KEY)
                return{
                    ok: true,
                    token
                }
            } catch(e){
                return {
                    ok: false,
                    error: e
                }
            }
        }

    }
}
