import { Controller, Get, Inject, Param, Post, Provide, Files, Fields, Context} from '@midwayjs/core';
import { UserService } from '../service/user.service';
import path = require('path');

@Provide()
@Controller('/image')
export class ImageController {
  @Inject()
  ctx:Context;
  @Inject()
  userService: UserService;
  
  @Get('/avatar/:username/get')
  async getAvatar(@Param('username') username) {
    return 'http://localhost:7001/' + this.userService.filter(username)['avatar'];
  }

  @Post('/avatar/:username/set')
  async setAvatar(@Param('username') username, @Files() files,) {
    this.userService.updateAvatar(username, path.basename(files[0]['data']));
  }

  @Post('/upload')
  async upload(@Files() files, @Fields() fields) {
    return files.map(item => 'http://localhost:7001/' + path.basename(item['data']));
  }
}