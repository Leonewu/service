import UserService from '../../service/UserService'


const resolver = {
  Query: {
    fetchUsers: (name: string) => UserService.getAll(name)
  },
  Mutation: {
    addUser: (parent, { name, age, firstName }, {dataSource}) => {
      console.log('name', name)
      console.log('age', age)
      console.log('first', firstName)
      return UserService.add(name, age, firstName)
    }
  }
}


export default resolver