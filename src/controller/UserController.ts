import UserService from "../service/UserService"

export default class UserController {

  public static fetchUsers(name: string) {
    return UserService.getAll(name)
  }

  public static addUser(parent: any, { name, age, firstName }, { dataSource }) {
    return UserService.add(name, age, firstName)
  }

}
