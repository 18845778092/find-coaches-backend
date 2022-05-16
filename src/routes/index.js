const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  // await ctx.render('index', {
  //   title: 'Hello Koa 2!'
  // })
  // console.log('访问成功')
  ctx.body = '访问//////成功'
})

router.get('/string', async (ctx, next) => {
  ctx.body = '访问string成功'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
