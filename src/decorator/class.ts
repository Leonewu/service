import * as KoaRouter from 'koa-router'

function RestController({ prefix }) {
  let router = new KoaRouter()
  if (prefix) {
    router.prefix(prefix)
  }
  return function (target) {
    console.log(target);
    console.log(12312313);
    let reqList = Object.getOwnPropertyDescriptors(target.prototype)
    console.log(reqList);
    return
    for (let v in reqList) {
      // 排除类的构造方法
      if (v !== 'constructor') {
        let fn = reqList[v].value
        // fn(router)
      }
    }
    return router
  }
}

export { RestController }