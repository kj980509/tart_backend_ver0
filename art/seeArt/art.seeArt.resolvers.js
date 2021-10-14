import client from "../../client";

export default {
    Query:{
        seeArt:async (_,{artId}) => {
            const art =  await client.art.findUnique({where: {id: artId}})

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
