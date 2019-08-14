import PermissionService from "../../../service/PermissionService"

const resolver = {
  Query: {
    fetchPermissions: PermissionService.getAll
  }
}

export default resolver
