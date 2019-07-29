import * as Router from "koa-router"
import uploadRouter from "./photo"
import testRouter from "./test"
const router = new Router()

router.use(uploadRouter.routes())
router.use(testRouter.routes())

export default router
