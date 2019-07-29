import uploadRouter from './photo'
import testRouter from './test'
import * as Router from 'koa-router'
const router = new Router()

router.use(uploadRouter.routes())
router.use(testRouter.routes())

export default router