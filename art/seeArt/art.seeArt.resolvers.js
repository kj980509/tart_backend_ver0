import client from "../../client";

export default {
    Query:{
        seeArt:async (_,{artId}) => {
            // Get Art Info
            const art =  await client.art.findUnique({where: {id: artId}})

            // Return art
            if(art){
                return art
            } else{
                return{
                    error: "Art Not Found"
                }
            }


        }

    }
}
