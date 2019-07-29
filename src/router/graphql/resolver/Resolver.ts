
/* resolver的类，由于有些resolver，部分有mutation，部分没有mutation，这样的话类型不统一 */
export default class Resolver {
  public Query: object
  public Mutation: object
  constructor(resolver?: object) {
    if (resolver) {
      this.setResolver(resolver)
    } else {
      this.Query = {}
      this.Mutation = {}
    }
  }
  public setResolver(resolver: any) {
    if (resolver && resolver.Query) {
      this.Query = resolver.Query
    }
    if (resolver && resolver.Mutation) {
      this.Mutation = resolver.Mutation
    }
  }
}
