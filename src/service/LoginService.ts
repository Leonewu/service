import axios from "axios"
import jwt from "jsonwebtoken"

interface IJwt {
  token: string
  exp: number
}

export default class LoginService {

  public static async code2Session(code: string): Promise<any> {
    const userInfo: any = await axios.get(
      `https://api.weixin.qq.com/sns/jscode2session` +
      `?appid=${process.env.APP_ID}` +
      `&secret=${process.env.APP_SECRET}` +
      `&js_code=${code}` +
      `&grant_type=authorization_code`
    )
    return Promise.resolve(userInfo)
  }

  public static async login() {
    // onlaunch的时候checkSession并且检查本地token，如果过期了或者没有token就登录
    // 检查header的type是否为‘miniProgram’，并检查appid是否正确
    // 正确的话，与微信交换session_key和open_id，并签发jwt（包含userId）到客户端
    // 客户端放在authorization里面提交到后台

  }

  public static genJwt(params: any): IJwt {
    // 两个小时过期时间
    const exp = Math.floor(Date.now() / 1000) + (60 * 60 * 2)
    const token = jwt.sign({exp, ...params}, process.env.APP_ID)
    const jsonwebtoken: IJwt = {token, exp}
    return jsonwebtoken
  }

  public static verify(token: string): Promise<boolean> {
    const res = jwt.verify(token, process.env.APP_ID)
    if (res.exp && new Date().getTime() > res.exp) {
      return Promise.resolve(true)
    }
    return Promise.reject(false)
  }


}
