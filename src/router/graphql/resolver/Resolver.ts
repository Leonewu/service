
/* resolver的类，由于有些resolver，部分有mutation，部分没有mutation，这样的话类型不统一 */
interface IQuery {
  [key: string]: any
}

export default class Resolver {
  public Query: IQuery
  public Mutation?: IQuery
  constructor(resolver?: Resolver) {
    if (resolver) {
      this.setResolver(resolver)
    } else {
      this.Query = {}
      this.Mutation = {}
    }
  }
  public setResolver(resolver: Resolver) {
    if (resolver && resolver.Query && Object.keys(resolver.Query).length) {
      this.Query = resolver.Query
    } else {
      this.Query = {}
    }
    if (resolver && resolver.Mutation && Object.keys(resolver.Mutation).length) {
      this.Mutation = resolver.Mutation
    } else {
      this.Mutation = {}
    }
  }
}
