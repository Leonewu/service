import UserController from '../../../controller/UserController'


const resolver = {
  Query: {
    fetchUsers: UserController.fetchUsers
  },
  Mutation: {
    addUser: UserController.addUser
  }
}


export default resolver