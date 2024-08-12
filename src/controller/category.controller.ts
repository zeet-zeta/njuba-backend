import { Context, Controller, Get, Inject, Param, Provide } from "@midwayjs/core";
import { CategoryService } from "../service/category.service";

@Provide()
@Controller('/category')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  categoryService: CategoryService;

  @Get('/get')
  async getCategory() {
    return this.categoryService.get();
  }

  @Get('/append/:name')
  async appendCategory(@Param('name') name) {
    this.categoryService.append(name);
  }

}