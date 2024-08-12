import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1721658938928_7685',
  koa: {
    port: 7001,
  },
  webSocket: {},
  cors: {
    origin: "*"
  },
  staticFile: {
    dirs: {
      default: {
        prefix: '/',
        dir: 'res',
      },
    }
  },
  upload: {
    tmpdir: 'res',
    cleanTimeout: 0,
    fileSize: '100mb',
  }

} as MidwayConfig;
