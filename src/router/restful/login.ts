import axios from "axios"
// import redis from 'redis'
import jwt from "jsonwebtoken"
import koaBody from "koa-body"
import Router from "koa-router"
import { getRepository } from "typeorm"
import logger from "winston"
import User from "../../entity/User"
import LoginService from "../../service/LoginService"

const router = new Router()
router.post("/session", async (ctx, next) => {
    const userInfo = await LoginService.code2Session(ctx.request.body.code)
    const userRepository = getRepository(User)
    let user = await userRepository.findOne({where: {openId: userInfo.data.openid}})
    if (user === undefined) {
      user = new User()
      user.openId = userInfo.data.openid
      user = await userRepository.save(user)
    }
    // 两个小时过期时间
    const token = LoginService.genJwt({userId: user.id})
    ctx.body = {
      token,
      code: ctx.request.body.code,
      open_id: userInfo.data.openid,
      session_key: userInfo.data.session_key,
      unionid: userInfo.data.unionid,
      errcode: userInfo.data.errcode,
      errmsg: userInfo.data.errmsg
    }
    next()
  })

export default router
