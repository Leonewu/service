import Router from "koa-router"
import login from "./login"
import uploadRouter from "./photo"
import testRouter from "./test"
const router = new Router()

router.use(uploadRouter.routes())
router.use(testRouter.routes())
router.use(login.routes())

export default router
