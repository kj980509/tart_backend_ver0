import client from "../../client";

export default {
    Query:{
        seeRoom: async (_,{roomId},{loggedInUser}) =>{
            /*const users = await client.room.findUnique({
                where:{id:roomId}
            }).users()*/

            const room = await client.room.findUnique({
                where:{id:roomId}
            })

            return room
        }
    }
}
