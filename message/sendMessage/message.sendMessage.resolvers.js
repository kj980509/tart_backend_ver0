import client from "../../client";
import pubsub from "../../pubsub";
import {NEW_MESSAGE} from "../../constants";

export default {
    Mutation:{
        sendMessage: async (_,{roomId, userId, artId, message},{loggedInUser}) =>{
            let room = null

            // When Send New Message to New User
            if(userId && artId){

                // Check User Exist
                const user = await client.user.findUnique({where:{id:userId}})
                if (!user){
                    return{
                        ok: false,
                        error: "User Not Found."
                    }
                }

                // Check userId and Artis(userId of artId) Matching
                const art = await client.art.findUnique({where:{id:artId}})
                if(art.userId !== userId ){
                    return {
                        ok:false,
                        error: "userId and artist(userId of Art) Not Matching"
                    }
                }


                // Check Room Already Created

                room = await client.room.findFirst({
                    where:{
                        users:{
                            some:{
                                id:loggedInUser.id
                            }
                        },
                        artId
                    }
                })

                if(room){
                    return{
                        ok: false,
                        error: `Room(id:${room.id} Already Existed.`
                    }
                } else{
                    room = await client.room.create({
                        data:{
                            users:{
                                connect:[{id:userId},{id:loggedInUser.id}]
                            }
                        }
                    })

                }
            } else if (roomId){

                // Check Room Exist
                room = await client.room.findUnique({
                    where:{id:roomId},
                    select:{
                        id:true,
                    users:true}
                })
                if (!room){
                    return{
                        ok:false,
                        error: "Room Not Found"
                    }
                }

            }
            /*const newMessage = await client.message.create({
                data:{
                    message,
                    room:{
                        connect:{
                            id: room.id
                        }
                    },
                    user:{
                        connect:{
                            id:loggedInUser.id
                        }
                    }
                }
            })*/
            await pubsub.publish(NEW_MESSAGE,{updateRoom: {...newMessage}})
            return{
                ok:true,
                id:message.id
            }
    }
}}
