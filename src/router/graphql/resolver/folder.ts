import FolderService from "../../../service/FolderService"

const resolver = {
  Query: {
    fetchFolders: (_, args) => {
    const { name, parentId } = args
    return FolderService.createFolder(name, parentId)
  }
  },
  Mutation: {
    createFolder: () => {
    return FolderService.fetchFolders()
  }
  }
}

export default resolver
