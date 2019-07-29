
export default `
  type User {
    id: Int
    firstName: String
    lastName: String
    age1: Int
    age23: Int
  }
  type Query {
    fetchUsers(name: String): [User]
  }
  type Mutation {
    addUser(name: String!, age: Int, firstName: String): User
  }
`
