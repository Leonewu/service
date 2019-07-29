import * as Router from 'koa-router'

const router = new Router()
router.get('/test', (ctx) => {
  ctx.body = 'sadf'
})

export default router