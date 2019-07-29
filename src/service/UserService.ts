
import { User } from '../entity/User'
import { getManager, getRepository  } from 'typeorm'
import { Context } from 'koa'

class UserService {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  static async rename(id: number, name: string) {
    const repository = getManager().getRepository(User);
    return 123;
  }
  static async add(name: string, age: number, firstName: string) {
    console.log('name', name);
    console.log('age', age);
    console.log('firstName', firstName);
    const user = new User();
    user.firstName = name;
    user.age1 = age;
    const repository = getManager().getRepository(User);
    const newUser = await repository.save(user);
    return newUser
  }
  static getAll(name: string) {
    console.log('getall', name)
    return getRepository(User).find();
  }
}

export default UserService