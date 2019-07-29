
import { Permission } from '../entity/Permission'
import { getManager, getRepository } from 'typeorm'
import { Context } from 'koa'

class PermissionService {
  constructor() {
  }
  static async rename(id: number, name: string) {
    const repository = getManager().getRepository(Permission);
    return 123;
  }
  static async add(name: string, age: number, firstName: string) {
    console.log('name', name);
    console.log('age', age);
    console.log('firstName', firstName);
    const permission = new Permission();
    permission.permission = name;
    permission.state = true;
    const repository = getManager().getRepository(Permission);
    const newPermission = await repository.save(permission);
    return newPermission
  }
  static getAll() {
    return getRepository(Permission).find();
  }
}

export default PermissionService