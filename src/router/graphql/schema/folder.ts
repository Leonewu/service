export default `
  type Folder {
    id: Int
    name: String
    rootId: Int
    ownerType: String
    ownerId: Int
    parentId: Int
    sn: String
    createdAt: String
    updatedAt: String
  }
  extend type Query {
    fetchFolders: [Folder]
  }
  extend type Mutation {
    createFolder(name: String!, parentId: Int = 0): Folder
  }
`
