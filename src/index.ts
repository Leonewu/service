import "reflect-metadata";
import {createConnection} from "typeorm";
import * as Koa from "koa";
import koaRouter from 'koa-router'
import { ApolloServer, gql } from 'apollo-server-koa'
const app = new Koa();
import { graphql, buildSchema } from 'graphql'


import schema from './schema'
import resolvers from './resolvers'

  createConnection().then(async connection => {

    const server = new ApolloServer({
      typeDefs: schema,
      resolvers
    });
    server.applyMiddleware({ app: app, path: '/graphql' })
    app.listen({ port: 4000 }, () => {
      console.log(`🚀 Server ready at ${server.graphqlPath}`);
    })

    /* rest route */
    
  }).catch(error => console.log(error));



