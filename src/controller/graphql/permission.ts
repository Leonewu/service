import { gql } from 'apollo-server-koa'
import PermissionService from '../../service/PermissionService'
import Resolver from "./Resolver";

const resolver = {
  Query: {
    fetchPermissions: () => PermissionService.getAll()
  }
}

export default resolver