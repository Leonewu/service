import "reflect-metadata";
import {createConnection} from "typeorm";
import * as Koa from "koa";
import * as Router from 'koa-router'
import { ApolloServer, gql } from 'apollo-server-koa'
const app = new Koa();
import * as KoaBody from 'koa-body'

import * as fs from 'fs'
import * as path from 'path'
import schema from './router/graphql'
import resolvers from './controller/graphql'
import { router } from './router'

// 集中处理错误
const handler = async (ctx, next) => {
  // log request URL:
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  ctx.set("Access-Control-Max-Age", "3600");
  ctx.set("Access-Control-Allow-Headers", "x-requested-with,Authorization,Content-Type,Accept");
  ctx.set("Access-Control-Allow-Credentials", "true");
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200
  }
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  try {
    await next();
    console.log('handler通过')
  } catch (err) {
    console.log('handler处理错误')
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};

app.use(handler);
app.use(KoaBody({
  multipart: true,
  formidable: {
    multiples: true
  }
}))
app.use(router.routes());

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



