import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/category.test.ts', () => {

  it('should GET /category/get', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).get('/category/get');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.text).toBe('["生活","科技","水贴","学习","校园"]');

    // close app
    await close(app);
  });

});
