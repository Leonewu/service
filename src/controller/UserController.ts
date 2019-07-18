
import { User } from '../entity/User'
import { getManager, getRepository  } from 'typeorm'
import { Context } from 'koa'
import { RestController } from '../decorator/class'

// @RestController({prefix: ''})
class UserController {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  async rename(id: number, name: string) {
    const repository = getManager().getRepository(User);
    return 123;
  }
  async add(name: string, age: number, firstName: string) {
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
  getAll(name: string) {
    console.log('getall', name)
    return getRepository(User).find();
  }
}

export default UserController