import permission from "./permission"
import Resolver from "./Resolver"
import user from "./user"
const src = [user, permission]
const resolvers = src.reduce((acc, cur) => {
  // 包一层，不然会报类型问题
  const resolver = new Resolver(cur)
  for (const query in resolver.Query) {
    if (resolver.Query[query]) {
      acc.Query[query] = resolver.Query[query]
    }
  }
  for (const mutation in resolver.Mutation) {
    if (resolver.Mutation[mutation]) {
      acc.Mutation[mutation] = resolver.Mutation[mutation]
    }
  }
  return acc
}, new Resolver())


export default resolvers
