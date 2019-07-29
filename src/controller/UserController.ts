import UserService from '../service/UserService'

export default class UserController {

  static fetchUsers(name: string){
    return UserService.getAll(name)
  }

  static addUser(parent: any, { name, age, firstName }, { dataSource }) {
    return UserService.add(name, age, firstName)
  }

}