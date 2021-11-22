import jwt from "jsonwebtoken"
import client from "../client";


export const getUser = async (token) => {
    try{
        if (!token){
            return "Token Not Exist";
        }
        const { id } = await jwt.verify(token, process.env.SECRET_KEY)
        const user = await client.user.findUnique({ where: { id } })

        if(user){
            return user
        } else{
            return "User Not Exist"
        }
    } catch{
        return "None Defined Error"
    }
}
