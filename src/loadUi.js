import Router from 'koa-router';


export default function loadUi() {
  const router = new Router();

  router.get('/', async (context, next) => {
    await context.render('index.pug');
    await next();
  });

  return router;
}
