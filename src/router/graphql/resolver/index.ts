import photo from "./photo"
import Resolver from "./Resolver"
const src = [photo]
const resolvers = src.reduce((acc, cur) => {
  acc = new Resolver(acc)
  for (const query in cur.Query) {
    if (cur.Query[query]) {
      acc.Query[query] = cur.Query[query]
    }
  }
  for (const mutation in cur.Mutation) {
    if (cur.Mutation[mutation]) {
      acc.Mutation[mutation] = cur.Mutation[mutation]
    }
  }
  return acc
}, new Resolver())


export default resolvers
