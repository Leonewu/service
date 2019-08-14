import UserService from "../../../service/UserService"


const resolver = {
  Query: {
    fetchUsers: (name: string) => {
      return UserService.getAll(name)
  }
  },
  Mutation: {
    addUser: (parent: any, { name, age, firstName }, { dataSource }) => {
      return UserService.add(name, age, firstName)
    }
  }
}


export default resolver
