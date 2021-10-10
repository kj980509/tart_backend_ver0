import jwt from "jsonwebtoken"
import client from "../client";


export const getUser = async (token) => {
    try{
        if (!token){
            return "not exist token";
        }
        const tokenId = await jwt.verify(token, process.env.SECRET_KEY).id.id
        const user = await client.user.findFirst({where:{id:tokenId}})

        if(user){
            return user
        } else{
            return null
        }
    } catch{
        return null
    }
}
