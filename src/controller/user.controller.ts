import { Provide, Controller, Post, Body, Inject, Context } from '@midwayjs/core';
import { UserService } from '../service/user.service';

@Provide()
@Controller('/api')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/register')
  async register(@Body() userData) {
    const isExisting = this.userService.find(userData["username"]);
    if (isExisting) {
      return {success: false, message: '用户名已被注册'};
    }
    this.userService.create(userData);
    
    return {success: true, message: '注册成功'};
  }

  @Post('/login')
  async login(@Body() userData) {
    const isExisting = this.userService.find(userData["username"]);
    if (!isExisting) {
      return {success: false, message: '用户名不存在'};
    }
    const isCorrect = this.userService.check(userData["username"], userData["password"]);
    if (isCorrect) {
      return {success: true, message: '登录成功'};
    } else {
      return {success: false, message: '密码错误'};
    }
     
  }
}