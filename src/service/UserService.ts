
import { Context } from "koa"
import { getManager, getRepository  } from "typeorm"
import { User } from "../entity/User"

class UserService {
  public static async rename(id: number, name: string) {
    const repository = getManager().getRepository(User)
    return 123
  }
  public static async add(name: string, age: number, firstName: string) {
    console.log("name", name)
    console.log("age", age)
    console.log("firstName", firstName)
    const user = new User()
    user.firstName = name
    user.age1 = age
    const repository = getManager().getRepository(User)
    const newUser = await repository.save(user)
    return newUser
  }
  public static getAll(name: string) {
    console.log("getall", name)
    return getRepository(User).find()
  }
  public name: string
  constructor(name: string) {
    this.name = name
  }
}

export default UserService
