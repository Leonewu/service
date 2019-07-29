import PermissionController from "../../../controller/PermissionController"

const resolver = {
  Query: {
    fetchPermissions: PermissionController.fetchPermissions
  }
}

export default resolver
