import { ApolloServer } from "apollo-server-koa"
import * as Koa from "koa"
import * as KoaBody from "koa-body"
import "reflect-metadata"
import { createConnection } from "typeorm"
import { resolvers, router, schema } from "./router"

const app = new Koa()
const handler = async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  ctx.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE")
  ctx.set("Access-Control-Max-Age", "3600")
  ctx.set("Access-Control-Allow-Headers", "x-requested-with,Authorization,Content-Type,Accept")
  ctx.set("Access-Control-Allow-Credentials", "true")
  if (ctx.request.method === "OPTIONS") {
    ctx.response.status = 200
  }
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`)
  try {
    await next()
    console.log("handler通过")
  } catch (err) {
    console.log("handler处理错误")
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message
    }
  }
}

app.use(handler)
app.use(KoaBody({
  formidable: {
    multiples: true
  },
  multipart: true
}))
app.use(router.routes())

createConnection().then(async (connection) => {

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers
  })
  server.applyMiddleware({ app, path: "/graphql" })
  app.listen({ port: 4000 }, () => {
      console.log(`🚀 Server ready at ${server.graphqlPath}`)
    })
  }).catch((error) => console.log(error))

