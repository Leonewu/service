import { gql } from 'apollo-server-koa'
import PermissionController from '../../../controller/PermissionController'

const resolver = {
  Query: {
    fetchPermissions: PermissionController.fetchPermissions
  }
}

export default resolver