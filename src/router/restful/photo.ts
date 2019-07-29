import * as Router from 'koa-router'
import PhotoService from '../../service/PhotoService'

const router = new Router()
router.post('/upload', PhotoService.upload)

export default router