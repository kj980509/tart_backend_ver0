import jwt from "jsonwebtoken"
import client from "../client";


export const getUser = async (token) => {
    try{
        if (!token){
            return "not exist token";
        }
        const { id } = await jwt.verify(token, process.env.SECRET_KEY)
        const user = await client.user.findUnique({ where: { id } })

        if(user){
            return user
        } else{
            return "error1"
        }
    } catch{
        return "error2"
    }
}
