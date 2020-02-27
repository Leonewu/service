import fs from "fs"
import path from "path"
import { getRepository } from "typeorm"
import Photo from "../entity/Photo"
export default class PhotoService {

  public static upload(ctx, next) {
    const photoRepository = getRepository(Photo)
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path)	// 创建可读流
    const ext = file.name.split(".").pop()		// 获取上传文件扩展名
    const filePath = path.join(__dirname, "../upload") + `/${file.name}`
    console.log(filePath)
    const upStream = fs.createWriteStream(filePath)		// 创建可写流
    reader.pipe(upStream)	// 可读流通过管道写入可写流
    const photo = new Photo()
    photo.name = file.name
    photo.folderId = 1
    photoRepository.save(photo)
    return ctx.body = "上传成功"
  }


}
