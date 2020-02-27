import Router from "koa-router"

const router = new Router()
router.get("/test", (ctx) => {
  ctx.body = "sadf"
})
router.get("/test1", (ctx) => {
  ctx.body = "家具家电就"
})
export default router
