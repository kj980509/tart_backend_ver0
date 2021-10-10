require("dotenv").config()

import express from "express";
import { GraphQLUpload, graphqlUploadExpress} from "graphql-upload";
import {ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./schema.js";
import logger from "morgan";
import {getUser} from "./user/user.utils";

const PORT = process.env.PORT
async function startServer(port, callback){
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        context: async (ctx) =>{
            if (ctx.req) {
                return {
                    loggedInUser: await getUser(ctx.req.headers.token)
                }
            } else {
                const {
                    connection: { context },
                } = ctx
                return {
                    loggedInUser: context.loggedInUser
                }
            }
        },
        subscriptions: {
            onConnect: async ({token}) => {
                if (!token){
                    throw new Error("You can't listen.")
                }
                const loggedInUser = await getUser(token)
                return{
                    loggedInUser
                }
            }
        }
    });
    await server.start()
    const app = express()
    app.use(logger("tiny"))
    app.use("/static",express.static("uploads"))
    app.use(graphqlUploadExpress())
    server.applyMiddleware({ app })

    await new Promise(r=>app.listen({port: PORT}, r))

    console.log(`server is running ${PORT}`)
}

startServer();
