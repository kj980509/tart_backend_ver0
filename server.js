require("dotenv").config()
import express from "express";
import { graphqlUploadExpress} from "graphql-upload";
import {ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./schema.js";
import logger from "morgan";
import {getUser} from "./user/user.utils";

import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';
import {SubscriptionClient} from "subscriptions-transport-ws";

const PORT = process.env.PORT
async function startServer(port, callback){
    const app = express()
    const httpServer = createServer(app);
    const schema = makeExecutableSchema({resolvers,typeDefs})
    const server = new ApolloServer({
        schema,
        context: async (ctx) =>{
            if (ctx.req){
                return{
                    loggedInUser: await getUser(ctx.req.headers.token)
                }}
            },
        plugins:[{
            async serverWillStart(){
                return{
                    async drainServer(){
                        subscriptionServer.close()
                    }
                }
            }
        }]
    });

    const subscriptionServer = SubscriptionServer.create({
        schema,
        execute,
        subscribe,
        onConnect: async ({token},webSocket, context) =>{
            if (!token) {
                throw new Error("Token Not Exist")
            } else{
                console.log(token)
                console.log("User Connected")
                const loggedInUser = await getUser(token)
                return loggedInUser
            }
        },
        onDisconnect(webSocket, context) {
            console.log("Disconnected!");
        },


    },{
        server:httpServer
    })

    await server.start()
    app.use(logger("tiny"))
    app.use("/static",express.static("uploads"))
    app.use(graphqlUploadExpress())
    server.applyMiddleware({ app })
    await new Promise(r=>httpServer.listen({port: PORT}, r))
    console.log(`server is running ${PORT}`)
}

startServer();
