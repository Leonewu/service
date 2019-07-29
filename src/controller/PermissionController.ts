import PermissionService from "../service/PermissionService"

export default class PermissionController {

  public static fetchPermissions() {
    return PermissionService.getAll()
  }

}
