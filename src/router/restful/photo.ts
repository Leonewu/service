import * as Router from 'koa-router'
import PhotoController from '../../controller/PhotoController'

const router = new Router()
router.post('/upload', PhotoController.upload)

export default router