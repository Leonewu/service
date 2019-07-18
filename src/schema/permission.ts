import { gql } from 'apollo-server-koa'

export default `
  type Permission {
    id: Int
    permission: String
    state: Boolean
  }
  extend type Query {
    fetchPermissions: [Permission]
  }
`

