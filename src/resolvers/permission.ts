import { gql } from 'apollo-server-koa'
import PermissionController from '../controller/PermissionController'
import ResolverController from "./ResolverController";
const permission = new PermissionController()

const resolver = {
  Query: {
    fetchPermissions: () => permission.getAll()
  }
}

export default resolver