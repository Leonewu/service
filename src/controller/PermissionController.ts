import PermissionService from '../service/PermissionService'

export default class PermissionController {

  static fetchPermissions() {
    return PermissionService.getAll()
  }

}