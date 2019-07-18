import user from './user'
import permission from './permission'
import ResolverController from './ResolverController'
const src = [user, permission]
const resolvers = src.reduce((acc, cur) => {
  // 包一层，不然会报类型问题
  const resolver = new ResolverController(cur)
  for (const query in resolver.Query) {
    acc.Query[query] = resolver.Query[query]
  }
  for (const mutation in resolver.Mutation) {
    acc.Mutation[mutation] = resolver.Mutation[mutation]
  }
  return acc
}, new ResolverController())


export default resolvers