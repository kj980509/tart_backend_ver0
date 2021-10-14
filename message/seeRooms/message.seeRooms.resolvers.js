import client from "../../client";

export default {
    Query:{
        seeRooms: async (_,{userId},{loggedInUser}) =>{
            // Check Authentication

            if (userId !== loggedInUser.id){
                return {
                    error: "Not Authenticated User"
                }
            }

            const rooms = await client.room.findMany({
                where:{
                    users:{
                        some:{
                            id: loggedInUser.id
                        }
                    }
                }
            })

            return rooms
        }
    }
}
