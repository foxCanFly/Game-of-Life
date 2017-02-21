import Koa from 'koa';
import Router from 'koa-router';
import views from 'koa-views';
import serve from 'koa-serve';
import convert from 'koa-convert';
import path from 'path';

import loadUi from './loadUi';
import log from './log';


export default async function () {
  const app = new Koa();

  try {
    app.name = 'Life';

    const ui = loadUi();

    const port = process.env.PORT || 3000;
    const rootRouter = new Router();

    rootRouter.use('/*', ui.routes(), ui.allowedMethods());

    app.use(errorHandler());
    app.use(convert(serve('dist')));
    app.use(convert(serve('public')));
    app.use(views(path.resolve(__dirname, './client')));
    app.use(rootRouter.routes());

    app.on('error', (error, context) => {
      log.error(`error processing ${context.method} ${context.url}: `, error);
    });

    app.listen(port);

    log.info(`Life is started up on port: ${port}`);
  } catch (error) {
    log.error('Life is started up with error: ', error);
  }
}

function errorHandler() {
  return async(context, next) => {
    try {
      await next();
    } catch (e) {
      context.status = e.statusCode || e.status || 500;
      context.body = {
        error: e.message
      };

      if (context.status === 500) {
        log.error(`request processing error ${context.request.originalUrl}: `, e);
      }
    }
  };
}
