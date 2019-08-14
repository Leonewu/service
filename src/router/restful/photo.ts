import * as fs from "fs"
import * as Router from "koa-router"
import * as path from "path"

const router = new Router()
router.post("/upload", (ctx: any, next: any) => {
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path)
    const ext = file.name.split(".").pop()
    const filePath = path.join(__dirname, "../upload") + `/${file.name}`
    console.log(filePath)
    const upStream = fs.createWriteStream(filePath)
    reader.pipe(upStream)
    ctx.body = "上传成功"
  })

export default router
