import { Body, Context, Controller, Get, Inject, Param, Post, Provide } from "@midwayjs/core";
import { PostService } from "../service/post.service";

@Provide()
@Controller('/post')
export class PostController {
    @Inject()
    ctx: Context;
    @Inject()
    postService: PostService;

    @Post('/create')
    async create(@Body() postData) {
        this.postService.create(postData);
    }

    @Get('/:category/get')
    async get(@Param('category') category ) {
        return this.postService.get(category);
    }

    @Post('/:username/like')
    async like(@Param('username') username, @Body() data) {
        this.postService.like(username, data.id);
    }

    @Post('/:username/unlike')
    async unlike(@Param('username') username, @Body() data) {
        this.postService.unlike(username, data.id);
    }
    
    @Post('/:username/comment')
    async comment(@Param('username') username, @Body() data) {
        this.postService.comment(username, data);
    }
    @Get('/:category/overview')
    async overview(@Param('category') category) {
        return this.postService.overview(category);
    }
}