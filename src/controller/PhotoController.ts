import * as fs from "fs"
import * as path from "path"

export default class PhotoController {
    public static upload(ctx: any, next: any) {
        const file = ctx.request.files.file
        const reader = fs.createReadStream(file.path)
        const ext = file.name.split(".").pop()
        const filePath = path.join(__dirname, "../upload") + `/${file.name}`
        console.log(filePath)
        const upStream = fs.createWriteStream(filePath)
        reader.pipe(upStream)
        ctx.body = "上传成功"
    }
}
