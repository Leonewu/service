
import {getRepository} from "typeorm"
import Folder from "../entity/Folder"

export default class FolderService {

  public static async createFolder(name: string, parentId: number) {
    const folderRepository = getRepository(Folder)
    const folder = new Folder()
    folder.parentId = parentId
    folder.name = name
    console.log(folder)
    await folderRepository.save(folder)
    return folder
  }

  public static async fetchFolders() {
    const folderRepository = getRepository(Folder)
    const folders = await folderRepository.find()
    console.log(folders)
    return folders
  }

}
