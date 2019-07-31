import FolderController from "../../../controller/FolderController"

const resolver = {
  Query: {
    fetchFolders: FolderController.fetchFolders
  },
  Mutation: {
    createFolder: FolderController.createFolder
  }
}

export default resolver
