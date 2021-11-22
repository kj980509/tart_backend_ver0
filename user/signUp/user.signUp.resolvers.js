import client from "../../client";
import jwt from "jsonwebtoken";
import {getUser} from "../user.utils";
export default {
    Mutation:{
        signUp: async (_,{userName, email, gender, birth})=>{

            try{

                // Check userName existing
                const ExistingUserName = await client.user.findFirst({
                    where:{userName},
                    select:{userName:true}
                })
                if (ExistingUserName){
                    throw new Error("이미 존재하는 유저명입니다.")
                }

                // Check Email existing
                const existingEmail = await client.user.findFirst({
                    where:{email},
                    select:{email:true}
                })
                if (existingEmail){
                    throw new Error("이미 가입된 이메일입니다.")
                }

                // Input Data To DataBase
                const user = await client.user.create({
                    data:{userName,email, gender,birth}
                })
                // Issue Token
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
