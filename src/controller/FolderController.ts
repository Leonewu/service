import FolderService from "../service/FolderService"

export default class FolderController {

  public static createFolder(_, args) {
    const { name, parentId } = args
    return FolderService.createFolder(name, parentId)
  }

  public static fetchFolders(_, args) {
    console.log(123)
    return FolderService.fetchFolders()
  }

}
