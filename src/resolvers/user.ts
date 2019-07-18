import UserController from '../controller/UserController'

const user = new UserController('www')


const resolver = {
  Query: {
    fetchUsers: (name: string) => user.getAll(name)
  },
  Mutation: {
    addUser: (parent, { name, age, firstName }, {dataSource}) => {
      console.log('name', name)
      console.log('age', age)
      console.log('first', firstName)
      return user.add(name, age, firstName)
    }
  }
}


export default resolver